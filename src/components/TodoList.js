// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react'
import Todo from './Todo'

class TodoList extends React.Component {
    constructor(){
        super()
    }

    render(){
        return(
            <div>
                {
                    this.props.todo.map(item => <Todo key={item.id} todo={item} />)
                }
            </div>
        )
    }
}

export default TodoList