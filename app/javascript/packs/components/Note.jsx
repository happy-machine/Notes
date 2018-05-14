import React from 'react'
class Note extends React.Component{
    
constructor(props){
    super(props)
    this.state=({color:'green'})
}
      componentDidMount(props){
      
    }
    onMouseOver = () => {
   console.log('over')

        this.setState({color:'red'})  
    }
    onMouseOut = () => {
        this.setState({color:'green'})       
    }

    render () {
        var concatStyle = {opacity: this.props.style.opacity,
                            color: this.state.color}

        return (
            // seperate new line seperate text into spans
            this.props.content.split('\\n').map(function(line, key) {        
                return (
                    <span key={key} style={concatStyle} onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut}>
                        {line}
                        <br/>
                    </span>
                )
            },this ) 
        )
    }
}
    
  export default Note;