import React from 'react'
import Note from './Note'

class NoteList extends React.Component {
 
  constructor ( props ){
    super ( props )
    this.state = {
      notes: [],
      id: '',
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
    var cookie = document.cookie, id, token
    cookie.split(';').forEach((piece)=>{
        if ( piece.indexOf('notes_id')  != -1 ) {
          id = piece.split('=')[1]
        }
        if ( piece.indexOf('notes_token') != -1) {
          token = piece.split('=')[1]
        }
        this.populateNotes( token, id )
    })
    }



  populateNotes = ( token , id ) => {
     fetch ( `/get_notes.json`,{
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-Token': document.querySelector ( 'meta[name="csrf-token"]' ) .getAttribute ( 'content' ) ,
        'authentication-token': token,
        'user-id': id
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