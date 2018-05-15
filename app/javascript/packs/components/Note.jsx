import React from 'react'
class Note extends React.Component {
    
    constructor ( props ){
        super ( props )
    }

    componentDidMount ( props ){ 
    }

    dataTransfer = (e) => {
       console.log('on mouse over '+e)
    }

    onMouseOut = (e) => {
        console.log('on mouse out '+e)
    }

    render () {  
        return (
            // seperate new line seperate text into spans
                <textarea dataTransfer={this.onMouseOut}>
                    {this.props.content}
                </textarea>
        )
    }
}
    
  export default Note;