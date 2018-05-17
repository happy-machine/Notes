import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import NoteList from './components/NoteList'
import NoteWindow from './components/NoteWindow'

class App extends React.Component{
  constructor ( props ){
    super ( props )
    this.state = { selectedNote: {} }
    this.noteListRef = React.createRef ()
    this.windowRef = React.createRef ()
  }

  noteSelected = (note) => {
    this.setState ({ selectedNote:note } , () => { 
    })
  }

  saveNote = (note) => {
    if ( note.length ){
      fetch( '/notes.json' , {
        method: 'POST',
        credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
            'X-CSRF-Token': document.querySelector ( 'meta[name="csrf-token"]' ) .getAttribute ( 'content' ) ,
          },
        body: JSON.stringify ({ content: note , id: this.state.selectedNote.id })
      }) 
      .then ( ( res ) => { 
        this.refresh ( res )
      })
    }
  }

  deleteNote = () => {
      fetch( `/notes/${ this.state.selectedNote.id } .json` , {
        method: 'DELETE',
        credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
            'X-CSRF-Token': document.querySelector ( 'meta[name="csrf-token"]' ) .getAttribute ( 'content' ) ,
          }
      }) 
      .then ( ( res ) => { 
        this.refresh ( res )
        this.clearWindow ( res )
      })
  }

  newNote = () => {
    this.clearWindow ()
    this.setState ({ selectedNote: {} })
  }

  refresh = ( res ) => {
      this.noteListRef.current.setState ({ notes: [] }) // ??
      this.noteListRef.current.populateNotes ()
  }

  clearWindow = () => {
    this.windowRef.current.clearWindow ()
  }

  showArrow = () => {
    this.arrow = document.getElementById('arrow')
    this.arrow.classList.toggle("showArrow");
    //this.arrow.classList.toggle("bounceArrow");
  }

  render (){
    return [ 
        <NoteList key="note_list" { ...this.state } onNoteSelect={ this.noteSelected } ref={ this.noteListRef }/> , 
        <div key="arrow" id={ 'arrow' }></div> ,
        <div key="new_note" onClick={ this.newNote } className={ 'new_note' }>
          <p>New Note</p>
          <div key="trash_note" onClick={ this.deleteNote } className="trash_note"></div>
        </div> ,
        <NoteWindow key="note_window" { ...this.state.selectedNote } saveNote={ this.saveNote } newNote={ this.newNote } ref={ this.windowRef }/> , 
        <div key="notes_logo" onClick={ this.showArrow } className="notes_logo"></div> 
    ]
  }
}

document.addEventListener ( 'DOMContentLoaded' , () => {
  ReactDOM.render (
    <App/> , document.getElementById ( 'app' )
  )
})
