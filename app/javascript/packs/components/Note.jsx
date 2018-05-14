import React from 'react'
class Note extends React.Component{
    

      componentDidMount(){
         this.refresh()
    }

    render () {
        return (
            // seperate new line seperate text into spans
            this.props.content.split('\\n').map(function(line, key) {        
                return (
                    <span key={key}>
                        {line}
                        <br/>
                    </span>
                )
            },this ) 
        )
    }
}
    
  export default Note;