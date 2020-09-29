import React from 'react'

class ToDoForm extends React.Component {
    constructor() {
        super()
        this.state = {
            toDo: ''
        }
    }

    handleChanges = e => {
        this.setState ({ [e.target.name]: e.target.value })
    }

    submitToDo = e => {
        e.preventDefault()
        this.setState({ toDo:'' })
        this.props.addToDo(e, this.state.toDo)
    }

    render() {
        console.log('rendering form')
        return (
            <form onSubmit={this.submitToDo}>
                <input
                    type = 'text'
                    placeholder = '...To Do'
                    value = {this.state.toDo}
                    name = 'toDo'
                    onChange = {this.handleChanges}
                />
                <button>Add Task!</button>
            </form>

        )
    }
}

export default ToDoForm