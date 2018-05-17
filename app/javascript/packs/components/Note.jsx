import React from 'react'

class Note extends React.Component {
    
    constructor ( props ){
        super ( props )
        this.state = { value: this.props.content }
    }

    static getDerivedStateFromProps(nextProps, prevState){
        return nextProps;
    }

    
    click = () => {
        this.props.onClick ( this.state )
    }

    format_title = function ( content ){
        if ( content && content.length ){
            return content .split ( '\n' ) .slice ( 0,1 ) .join ( ' ' ) .split ( ' ' ) .slice ( 0,5 ) .join ( ' ' ) + "\n"
        }
    }

    render () {  
        return (
                <div className="titles" onClick={ this.click } value={ this.state.value } onChange={ this.handleChange } onBlur={ this.handleSubmit }>
                    { this.format_title ( this.state.value ) }
                </div>
        )
    }
}
    
export default Note;