import React from 'react'
import Note from './Note'
/*
class NoteList extends React.Component{
  this.notes = ['Jake', 'Jon', 'Thruster'];
  this.notesList = notes.map((contents,i)=>{
    return <div><Note contents={contents} key={i}/></div>
  })
    render(){
      return(
        <div>
          <Note />
        </div>
      )
    }
  }*/

class NoteList extends React.Component{
 
  constructor(props){
    super(props)
    this.state= {
    notes:[]
    }
  }

  componentDidMount () {
   fetch('/notes.json').then((res)=>{
    //this.setState({notes:res.notes})
    console.log(res)
    return res.json();
    })
    .then( (res) => { 
      this.setState({notes:res})
    })
    .catch( e => { console.log(e) 
    })
  }

  render () {
    var notes = this.state.notes.map((contents,i)=>{
      console.log(contents)
      return <Note {...contents} key={i} />
    })
    
    return (
      <div children={notes}></div>
    )
  }
}

export default NoteList;