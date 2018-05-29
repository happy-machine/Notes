var port = '3500'
var reload = () => {
      setup()
      getToken()
}

window.onload = () => {
  reload ()
}

var save = ( content , id ) => {
  fetch ( `https://notes-app-w.herokuapp.com/notes.json` , {
      method: 'POST',
      body: JSON.stringify ({ content: content}) ,
      headers: {
        'Content-Type': 'application/json' ,
        'user-id': id
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
      return getId ( cookie.value )} 
    
  }) || error('no token')

})
}

var getId = ( token ) => {
 this.chrome.cookies.getAll( {} ,function (cookie) {
   return cookie.forEach ( (cookie, i ) => { 
     if (cookie.name == "notes_id") {
       return getNotes ( token, cookie.value )} 
     
   }) || error('no token')
 
 })
 }

var getNotes = (token, id) => {
  if (token){
    console.log('token',token)
    fetch ( `https://notes-app-w.herokuapp.com/get_notes.json` 
        ,{headers: {
          'authentication-token': token,
          'user-id': id
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
errorLink.addEventListener( "click", function() { window.open ( `https://notes-app-w.herokuapp.com/users/sign_in` , '_blank' ) })
}

var printResults = ( res, token, parent) => {
console.log('passed ref', res)
  var divCreate, div 
  res.forEach ( (item,i) => { 
      div = document.createElement('a')
      div.addEventListener( "click", function() { window.open ( `https://notes-app-w.herokuapp.com/notes/${item.id}/edit` , '_blank' ) })
      div.innerHTML = item.content.split ( '\n' ) .slice ( 0,1 ) .join ( ' ' ) 
      .split ( ' ' ) .slice ( 0,2 ) .join ( ' ' ) + "</BR>"
      div.setAttribute ( 'id' , i )
      div.setAttribute ( 'class','notes' );
      document.getElementById ( "parent" ).appendChild ( div )
  })

  var area = document.querySelector ( 'textarea' )
  if ( area.addEventListener ) {
      area.addEventListener ( 'input' , function ( e ) {
        if ( e.data == null ){
            save ( e.target.value , getId() )
        }
      }, false );
  } else if ( area.attachEvent ) {
        area.attachEvent ( 'onpropertychange', function() {  })       
        }
}
  