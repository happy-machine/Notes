import React from 'react'
class Note extends React.Component{
    
constructor(props){
    super(props)
    this.state=({color:'green'})
}
      componentDidMount(props){
      
    }
    onMouseOver = () => {

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
                    <span key={key} ref={(fieldEditor1) => {this.fieldEditor1 = fieldEditor1;}}  style={concatStyle} onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut}>
                        {line}
                        <br/>
                    </span>
                )
            },this ) 
        )
    }
}
    
  export default Note;