import React from 'react'
import './Todo.css'

const ToDo = props => {
    return (
        <div 
        className = {`todo${props.toDo.completed ? 'completed' : ''}`}
        onClick={() => props.toggleToDo(props.toDo.id)}
        >
            <p>{props.toDo.task}</p>
        </div>
    )
}

export default ToDo
