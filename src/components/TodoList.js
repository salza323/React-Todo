// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react'

import ToDo from './Todo'

const ToDoList = props => {
    return (
        <div className="to-do-list">
            {props.tasks.map(toDo => (
                <ToDo key ={toDo.id} toDo = {toDo} toggleToDo={props.toggleToDo} />
            ))}
            <button className ='clear-btn' onClick={props.clearCompleted}>
                Clear Completed Tasks
            </button>
        </div>
    )
}

export default ToDoList