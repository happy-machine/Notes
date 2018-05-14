import React from 'react'
class Note extends React.Component{
    
    constructor( props ){
        super( props )
        this.state=({
            opacity:'0',
            color:'green'
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
      componentDidMount(){
         this.refresh()
    }

    render () {
        return (
            // seperate new line seperate text into spans
            this.props.content.split('\\n').map(function(line, key) {        
                return (
                    <span key={key} style={this.state} onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut}>
                        {line}
                        <br/>
                    </span>
                )
            },this ) 
        )
    }
}
    
  export default Note;