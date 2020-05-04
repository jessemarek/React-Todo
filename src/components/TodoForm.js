import React from 'react'

class TodoForm extends React.Component {
    constructor(){
        super()

        this.state = {
            formValue: ''
        }
    }

    inputChange = e =>{
        this.setState(
            {
                formValue: e.target.value
            }
        )
    }

    submitForm = e =>{
        e.preventDefault()
        this.props.addTask(this.state.formValue)

        this.setState(
            {
                formValue: ''
            }
        )

    }

    render(){
        return(
            <form onSubmit={this.submitForm}>
                <input type="text" onChange={this.inputChange} value={this.state.formValue} />
                <button>Add ToDo</button>
                <button type="button" onClick={this.props.clearCompleted} >Clear Completed</button>
            </form>
        )
    }
}

export default TodoForm