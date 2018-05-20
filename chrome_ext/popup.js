var reload = () => {

    setTimeout (()=>{
        fetch ( 'http://localhost:3000/notes.json' ) 
            .then ( ( res ) => {
                return res.json () 
            })
            .then ( (res) => { 
                printResults ( res )
            })
            .catch ( e => { 
                console.log ( e ) 
            })
    } , 90 )

    var printResults = ( res ) => {
        var notes = res.map ( ( item , i ) => { 
            return item.content.split ( '\n' ) .slice ( 0,1 ) .join ( ' ' ) 
            .split ( ' ' ) .slice ( 0,5 ) .join ( ' ' ) + "\n"
        })
        
        var divCreate, div , parent = document.createElement('div')
        parent.setAttribute('id','parent')
        document.getElementById("list").appendChild(parent);
        res.forEach((item,i)=>{ 
            div = document.createElement('a')
            div.addEventListener( "click", function(){ window.open(`http://localhost:3000/notes/${item.id}`,'_blank') })
            if ( div.classList.contains ( "a-link" ) ){
                chrome.tabs.create ({ url: `http://localhost:3000/notes/${item.i}`})
                return false;
            }
            div.innerHTML=item.content.split ( '\n' ) .slice ( 0,1 ) .join ( ' ' ) 
            .split ( ' ' ) .slice ( 0,5 ) .join ( ' ' )+"</BR>"
            div.setAttribute( 'id' , i )
            div.setAttribute( 'class','notes' );
            document.getElementById( "parent" ).appendChild( div )
        })
        var area = document.querySelector('textarea');
        if (area.addEventListener) {
            area.addEventListener('input', function(e) {
              if (e.data == null){
                  save(e.target.value)
              }
            }, false);
        } else if (area.attachEvent) {
              area.attachEvent('onpropertychange', function() {// IE-specific event handling code
                })
              }
    }

    var save = (content) => {
        fetch ( 'http://localhost:3000/notes.json' , {
            method: 'POST',
            body: JSON.stringify ({ content: content}) ,
            headers: {
              'Content-Type': 'application/json',
            }
        }) 
        .then ( ( res ) => { 
            clear ()
        }).catch((e)=>{
            console.log(e)
        })
    }
}

var clear = () => {
    var parentThis = document.getElementById("parent");
    parentThis.parentElement.removeChild(parentThis);
    area.value = '';
    reload()
}

reload()






  /*
  navigator.clipboard.writeText('Text to be copied')
  .then(() => {
    console.log('Text copied to clipboard');
  })
  .catch(err => {
    // This can happen if the user denies clipboard permissions:
    console.error('Could not copy text: ', err);
  });*/
/*
  navigator.clipboard.readText()
  .then(text => {
    console.log('Pasted content: ', text);
  })
  .catch(err => {
    console.error('Failed to read clipboard contents: ', err);
  });
  */
/*
  chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.method == "getSelection")
      sendMessage({data: window.getSelection().toString()});
    else
      sendResponse({}); // snub them.
});
    navigator.clipboard.readText().then((res)=>{console.log(res)}).catch((e)=>{console.log(e)})
  

*/
/*
var keyone 
var key1 = document.getElementById('key1')
chrome.commands.onCommand.addListener(function (command) {
  if (command === "save") {
  
  chrome.tabs.executeScript( {
    code: "window.getSelection().toString();"
}, function(selection) {
  key1.innerHTML= selection[0];
});
  
      navigator.clipboard.writeText('Text to be copied')
      .then(() => {
        console.log('Text copied to clipboard');
      })
      .catch(err => {
        // This can happen if the user denies clipboard permissions:
        console.error('Could not copy text: ', err);
      })
      
  } else if (command === "random") {
    chrome.tabs.executeScript( {
      code: "window.getSelection().toString();"
  }, function(selection) {
    console.log(selection)
    var key2 = document.getElementById('keyOne')
    key2.innerHTML= selection[0];
  });
 chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
    if (request.greeting == "hello")
      sendResponse({farewell: "goodbye"});
  });   
  */
//chrome.tabs.executeScript(null,
  //{code:"alert(window.getSelection().toString());"})