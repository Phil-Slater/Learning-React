import React, { Component } from 'react'

class Name extends Component {
    constructor() {
        super()
        this.state = {
            name: ''
        }
    }

    handleTextUpdate = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSaveName = () => {
        this.props.onNameSaved(this.state.name)
    }

    render() {
        return (
            <div>
                <h1>Enter name:</h1>
                <input type="text" name="name" onChange={this.handleTextUpdate} />
                <button onClick={this.handleSaveName}>Submit</button>
            </div>
        )
    }

}

export default Name
