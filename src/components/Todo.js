import React from 'react'

class Todo extends React.Component {

    render(){
        return(
            <li 
                className={this.props.todo.completed ? "completed" : null}
                onClick={this.props.markComplete}
            >
                {this.props.todo.task}
            </li>
        )
    }
}

export default Todo