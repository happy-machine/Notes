import React from 'react'
import Note from './Note'

class NoteList extends React.Component {
 
  constructor ( props ){
    super ( props )
    this.state = {
      notes: []
    }
  }

  static getDerivedStateFromProps ( nextProps , prevState ){
    return nextProps;
  }

  componentDidMount () {
  this.populateNotes()
  }

  populateNotes = () => {
    fetch ( '/notes.json' ) 
    .then ( ( res ) => {
      return res.json () 
    })
    .then ( (res) => { 
      this.setState ({ notes: res })
      console.log('res is', res)
      console.log('state is',this.state)
    })
    .catch ( e => { 
      console.log ( e ) 
    })
  }
 
  render () {
    var notes = this.state.notes .map (( contents,i ) => {
      return <Note onClick={ this.props.onNoteSelect } className="preview" { ...contents }  key={ i }/>
    } , this )

    return (
      <div className="list" children={ notes }></div>
    )
  }
}

export default NoteList;