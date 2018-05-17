
setTimeout (()=>{


document.getElementById('test').innerHTML=""

fetch ( '/notes.json' ) 
    .then ( ( res ) => {
      return res.json () 
    })
    .then ( (res) => { 
     console.log('res1',res)
    printResults(res)
    })
    .catch ( e => { 
      console.log ( e ) 
    })
},1000)

var printResults = (res) => {
console.log(res)
}

