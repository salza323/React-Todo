import React from 'react';

// import TodoForm from './TodoForm'
import ToDoList from './components/TodoList'
import ToDoForm from './components/TodoForm';

const tasks = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];



class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super()
    this.state = {
      tasks
    }
  }

  addToDo = (e, toDo) => {
    e.preventDefault()
    const newToDo = {
      task: toDo, 
      id: Date.now(),
      completed: false
    }
    this.setState({
      tasks: [...this.state.tasks, newToDo]
    })
  }

  toggleToDo = (todoId) => {
    console.log(todoId)
    this.setState({
      tasks: this.state.tasks.map((toDo) => {
        if (todoId === toDo.id) {
          return {
            ...toDo, 
            completed: !toDo.completed
          }
        }
        return toDo
      })
    })
  }

  clearCompleted = (e) => {
    e.preventDefault()
    this.setState({
      tasks: this.state.tasks.filter((toDo) => !toDo.completed)
    })
  }

  render() {
    console.log('rendering...')
    return (
      <div className='App'>
        <div className = 'header'>
          <h2>The Todo App!</h2>
        </div>
        <ToDoList tasks = {this.state.tasks} toggleToDo = {this.toggleToDo} clearCompleted = {this.clearCompleted} />
        <ToDoForm addToDo = {this.addToDo} />
      </div>
    );
  }
}

export default App;
