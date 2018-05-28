var port = '3500'
var reload = () => {
      setup()
      getToken()

}

window.onload = () => {
  reload ()
}

var save = (content) => {
  fetch ( `http://localhost:${port}/notes.json` , {
      method: 'POST',
      body: JSON.stringify ({ content: content}) ,
      headers: {
        'Content-Type': 'application/json' ,
      }
  }) 
  .then ( ( res ) => { 
      clear ()
     
  }).catch ( (e) => {
      console.log ( e )
  })
}

var getToken = () => {
this.chrome.cookies.getAll( {} ,function (cookie) {

  return cookie.forEach ( (cookie, i ) => { 
    if (cookie.name == "notes_token") {
      return getNotes (cookie.value) } 
    
  }) || error('no token')

})
}



var getNotes = (token) => {
  console.log('token',token)
  if (token){
    fetch ( `http://localhost:${port}/get_notes.json` 
        ,{headers: {
          'authentication-token': token
        }}
        ) 
        .then ( ( res ) => {
            return res.json () 
        })
        .then ( (res) => { 
          document.contains(document.getElementById("error-link")) ? document.getElementById("error-link").remove() : null
          document.getElementById("area").style.height = "18px"
          document.getElementById("area").style.display = "inline"
            printResults ( res, token, parent)
        })
        .catch ( e => { 
            //console.log ( 'error:', e ) 
        })
  } else {
    error ('no token')
  }}


var setup = () => {
  // Add error 

  var parent = document.createElement('div')
  parent.setAttribute ( 'id' , 'parent' )
  document.getElementById( "list" ).appendChild ( parent );
  document.getElementById("area").style.display = "none"
  document.getElementById("area").style.height = "0px!important"
}

var clear = () => {
  var parentThis = document.getElementById ( "parent" )
  parentThis.parentElement.removeChild ( parentThis )
  area.value = ''  

  reload ()
}

var error = (arg) => {
  switch (arg){
    case 'no token' : errorMessage ( {text: 'Please', bold: 'Log In.'}) ; break;
  }
}

var errorMessage = ( message ) => {
document.contains(document.getElementById("error-link")) ? document.getElementById("error-link").remove() : null
document.body.style = "height:18px; width:90px; background-color:#FFF576;"
var errorLink = document.createElement ( 'div' )
errorLink.setAttribute ( 'id' , 'error-link' )
errorLink.innerHTML = `<div id="el-text">${message.text}</div><div id="el-bold">${message.bold}</div>`
document.getElementById( 'parent' ).appendChild (errorLink)
errorLink.addEventListener( "click", function() { window.open ( `http://localhost:${port}/users/sign_in` , '_blank' ) })
}

var printResults = ( res, token, parent) => {
console.log('passed ref', res)
  var divCreate, div 
  res.forEach ( (item,i) => { 
      div = document.createElement('a')
      div.addEventListener( "click", function() { window.open ( `http://localhost:${port}/notes/${item.id}/edit` , '_blank' ) })
      if ( div.classList.contains ( "a-link" ) ){
          chrome.tabs.create ({ url: `http://localhost:${port}/notes/${item.i}` })
          return false
      }
      div.innerHTML = item.content.split ( '\n' ) .slice ( 0,1 ) .join ( ' ' ) 
      .split ( ' ' ) .slice ( 0,5 ) .join ( ' ' ) + "</BR>"
      div.setAttribute ( 'id' , i )
      div.setAttribute ( 'class','notes' );
      document.getElementById ( "parent" ).appendChild ( div )
  })
  var area = document.querySelector ( 'textarea' )
  if ( area.addEventListener ) {
      area.addEventListener ( 'input' , function ( e ) {
        if ( e.data == null ){
            save ( e.target.value )
        }
      }, false );
  } else if ( area.attachEvent ) {
        area.attachEvent ( 'onpropertychange', function() {  })       
        }
}
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