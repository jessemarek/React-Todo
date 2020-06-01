import React from 'react';
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'

import './components/Todo.css'

const todoData = [

  {
    task: 'Create Components',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Set State',
    id: 1528817084358,
    completed: false
  }

]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super()
    this.state = {
      todo: todoData
    }
  }

  addTask = task =>{
    const newTask = {
      task: task,
      id: Date.now(),
      completed: false
    }

    this.setState(
      {
        todo: [...this.state.todo, newTask]
      }
    )
  }

  markComplete = e =>{
    const id = e.target.id
    const newTodo = [...this.state.todo]
    newTodo.splice(id, 1, {...this.state.todo[id], completed: !this.state.todo[id].completed})

    this.setState(
      {
        todo: newTodo
      }
    )
  }

  clearCompleted = e =>{

    this.setState(
      {
        todo: [...this.state.todo.filter(item => item.completed === false)]
      }
    )
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList todo={this.state.todo} markComplete={this.markComplete} />
        <TodoForm addTask={this.addTask} clearCompleted={this.clearCompleted} />
      </div>
    );
  }
}

export default App;
