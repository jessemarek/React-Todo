import React from 'react';
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'

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
        todo: [...todoData, newTask]
      }
    )
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList todo={this.state.todo} />
        <TodoForm addTask={this.addTask} />
      </div>
    );
  }
}

export default App;
