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
    this.state = {
    opacity: '0',
    notes: [],
    color: 'green'
    }
  }

  componentDidMount () {
   fetch('/notes.json').then((res)=>{
     
    return res.json();
    })
    .then( (res) => { 
      this.setState({notes:res})
    })
    .catch( e => { console.log(e) 
    })
  }

  onMouseOver = () => {
    this.setState({color:'red'})   
}
onMouseOut = () => {
    this.setState({color:'green'})       
}

refresh = () =>{
    setTimeout( ( props ) => {
      if (this.state.color!='red'){
            var localOpacity = parseFloat( this.state.opacity )
            localOpacity+=0.01
            this.state.opacity > 1.1 ? this.setState({ opacity:'0' }) : this.setState({ opacity:localOpacity.toString() })
        }
        this.refresh()
     }, 100);  
}

  render () {

    var notes = this.state.notes.map((contents,i)=>{

      return <Note {...contents} style={this.state.bind} onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut} key={i} />
    },this)

    return (

      <div children={notes}></div>
    )
  }
}

export default NoteList;