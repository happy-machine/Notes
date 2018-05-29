var port = '3500'

var reload = () => {
      setup()
      getCredentials().then((res)=>{
        getNotes(res)
      })
     
}

window.onload = () => {
  reload ()
}

var save = ( content , credentials ) => {
  fetch ( `https://notes-app-w.herokuapp.com/notes.json` , {
      method: 'POST',
      body: JSON.stringify ({ content: content}) ,
      headers: {
        'Content-Type': 'application/json' ,
        'user-id': credentials.id
      }
  }) 
  .then ( ( res ) => { 
      clear ()
     
  }).catch ( (e) => {
      console.log ( e )
  })
}

var getCredentials = () => { return new Promise ((resolve,fail) => {
  var id, token
  this.chrome.cookies.getAll( {} ,function (cookie) {
    cookie.forEach ( (cookie, i ) => { 
      if (cookie.name == "notes_id") {
        id = cookie.value
      }
      if (cookie.name == "notes_token") {
        token = cookie.value
      }
    })
    if ( token && id ) { 
      resolve( { id: id, token: token } )
    } else {
     fail ( error('no token') )
    }
  })
})}


var getNotes = ( credentials ) => {
  fetch ( `https://notes-app-w.herokuapp.com/get_notes.json` 
  ,{headers: {
    'authentication-token': credentials.token,
    'user-id': credentials.id
  }}) 
  .then ( ( res ) => {
      return res.json () 
  })
  .then ( (res) => { 
    document.contains(document.getElementById("error-link")) ? document.getElementById("error-link").remove() : null
    document.getElementById("area").style.height = "18px"
    document.getElementById("area").style.display = "inline"
    printResults ( res, credentials.token )
  })
  .catch ( e => { 
    console.log ( 'error:', e ) 
  })
}


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

var printResults = ( res, token ) => {
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
           getCredentials().then((res)=>{ return  save ( e.target.value , res )}) 
        }
      }, false );
  } else if ( area.attachEvent ) {
        area.attachEvent ( 'onpropertychange', function() {  })       
        }
}
  