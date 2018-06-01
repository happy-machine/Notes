import React from 'react'

class NoteWindow extends React.Component {
    constructor ( props ){
        super ( props )
        this.state = { value: this.props.content ,
                      selected: ''
        }
    }

    componentDidMount () {
        focus()
    }

    static getDerivedStateFromProps( nextProps, prevState ){
        return nextProps
    }

    clearWindow = () => {
        this.setState ({ value: ''})
    }

    handleChange = ( e ) => {
        this.setState ({ value: e.target.value })
        clearTimeout ( this.timer )
        this.timer = setTimeout ( () => {
            this.save ( this.state.value )   
        }, 2000 ) 
    }
  
    save = ( value ) => {
        this.props.saveNote ( value ) 
    }
  
    new = () => {
        this.setState ({ value: ''})
        this.props.newNote ()
        this.textarea.focus(); 
    }

    render () {  
        return (
                <textarea value={ this.state.value } placeholder="Add a note.." onChange={ this.handleChange } onBlur={ this.handleSubmit } className="window">
                    { this.state.value }
                </textarea>
        )
    }
}
export default NoteWindow;


  
    /*handleSubmit = ( e ) => {
        this.setState ({ value: e.target.value } , this.save ( this.state.value )  )
    }*/
