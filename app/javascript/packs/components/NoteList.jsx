import React from 'react'
import Note from './Note'

class NoteList extends React.Component {
 
  constructor ( props ){
    super ( props )
    this.state = {
      notes: []
    }
  }

  componentDidMount () {
   fetch ( '/notes.json' ) .then ( (res) => {
    return res.json () 
    })
    .then( (res) => { 
    this.setState ({ notes:res })
    })
    .catch ( e => { console.log (e) 
    })
  }

  render () {
    var notes = this.state.notes .map (( contents,i ) => {
      return <Note className="preview" {...contents} key={i}/>
    } , this )

    return (
      <div className="list" children={notes}></div>
    )
  }
}

export default NoteList;