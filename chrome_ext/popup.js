var reload = async () => {
      setup();
      await printResults(await getFromStorage('notesBuffer'));
}

window.onload = () => {
  reload ();
  var area = document.querySelector ( 'textarea' );
  if ( area && area.addEventListener ) {
      area.addEventListener ( 'input' , async function ( e ) {
        if ( e.data == null && e.inputType !== "deleteContentBackward" ){
          const values = await updateLocalStorage('notesBuffer', e.target.value);
          document.getElementById("area").value="";
          document.getElementById ( "parent" ).innerHTML="";
          await printResults(values);
        }
      }, false );
      const clearButton = document.getElementById ( 'clear' )
      clearButton.addEventListener( "click", async () => {
        await emptyStorage('notesBuffer');
        await clear();
      })
  } 
}

async function getLocalStorageValue(key) {
  return new Promise((resolve, reject) => {
      try {
          chrome.storage.sync.get(key, function (value) {
              resolve(value);
          })
      }
      catch (ex) {
          reject(ex);
      }
  });
}

async function setLocalStorage(key, content) {
  return new Promise((resolve, reject) => {
      try {
          chrome.storage.sync.set({[key]: content}, function (value) {
              resolve(value);
          })
      }
      catch (ex) {
          reject(ex);
      }
  });
}

async function emptyStorage(key){
  await setLocalStorage(key,[]);
}

async function updateLocalStorage(key, value) {
  const LocalStorageValue = await getLocalStorageValue(key);
  const content = LocalStorageValue[key] || [];
  content.push({content: value, id: (new Date()).getTime().toString(36) + Math.random().toString(36).slice(2)})
  return new Promise((resolve, reject) => {
      try {
          chrome.storage.sync.set({[key]: content}, function (res) {
              resolve(content);
          })
      }
      catch (ex) {
          reject(ex);
      }
  });
}

async function removeFromStorage (value, e) {
  if (e.id !== undefined){
    const values = await getFromStorage(value);
    values.length && values.forEach((value, i) => {
      if (value.id === e.id){
        values.splice(i, 1);
      }
    })
    return values;
  }
}

async function getFromStorage(value) {
 const res = await getLocalStorageValue(value);
 return res[value];
}

var setup = () => {
  var parent = document.createElement('div');
  parent.setAttribute ( 'id' , 'parent' );
  document.getElementById( "list" ).appendChild ( parent );
}

var clear = async () => {
  var parent = document.getElementById ( "parent" )
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
  const values = await getFromStorage('notesBuffer');
  await printResults(values);
}


var printResults = async ( res, token ) => {
  if (res.length){
    let div;
    res.forEach ( (item) => { 
        span = document.createElement('div')
        span.setAttribute ( 'class','item-container' );
        div = document.createElement('a')
        div.innerHTML = item.content
        div.setAttribute ( 'class','notes' );
        span.appendChild ( div )
        const png = document.createElement('img')
        png.setAttribute ( 'src','./close.png' );
        png.setAttribute ( 'class','close' );
        png.setAttribute ( 'id', item.id );
        png.addEventListener( "click", async () => {
          const values = await removeFromStorage('notesBuffer', png);
          await setLocalStorage('notesBuffer', values);
          await clear();
        })
        span.appendChild ( png );
        document.getElementById ( "parent" ).appendChild ( span );
    })
  }
}
  
