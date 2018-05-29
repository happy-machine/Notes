import React from 'react'
import Note from './Note'

class NoteList extends React.Component {
 
  constructor ( props ){
    super ( props )
    this.state = {
      notes: [],
      token: ''
    }
  }

  static getDerivedStateFromProps ( nextProps , prevState ){
    return nextProps;
  }

  componentDidMount () {
    this.getToken_populateNote()
  }

  getToken_populateNote = () => {
    var cookie = document.cookie
      if (cookie.split('=')[0] == "notes_token"){
        this.setState({ token: cookie.split('=')[1] }, this.populateNotes(cookie.split('=')[1]))
      
      }
    }



  populateNotes = (token) => {
    //fetch ( `/notes.json?auth=${token}` ) 
     fetch ( `/get_notes.json`,{
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-Token': document.querySelector ( 'meta[name="csrf-token"]' ) .getAttribute ( 'content' ) ,
        'authentication-token': token,
        'browser-request': 'true' 
      }
     } ) 
    .then ( ( res ) => {
      return res.json () 
    })
    .then ( (res) => { 
      this.setState ({ notes: [] })
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