import React from 'react'
class Note extends React.Component{
    
constructor(props,state){
    super(props)
    console.log(props)
}
      componentDidMount(props){
      
    }

    render () {
        return (
            // seperate new line seperate text into spans
            this.props.content.split('\\n').map(function(line, key) {        
                return (
                    <span key={key} style={this.props.style} onMouseOver={this.props.onMouseOver} onMouseOut={this.props.onMouseOut}>
                        {line}
                        <br/>
                    </span>
                )
            },this ) 
        )
    }
}
    
  export default Note;