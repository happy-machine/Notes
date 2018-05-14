import React from 'react'
class Note extends React.Component{
    render(){
        
        var noteStyle = {
            color: "red"
        }
        function on2M(){
            console.log('clicked')
            //setState({color:'blue'})}
        }
        return(
                    this.props.content.split('\\n').map(function(line, key) {
                    return (
                    <span key={key} style={noteStyle} onClick={on2M()}>
                        {line}
                        <br/>
                    </span>
                    )
                }) 
                )

            }
        }
    
  export default Note;