import React, {Component} from 'react'

// todo: {body: "todo1", id: 2, completed: true}

class Todo extends Component {
  render(){
    return(
      <p data-todos-index={this.props.todo.id}>
        <span>{this.props.todo.body}</span><button onClick={() =>
        this.props.onDeleteTodo(this.props.todo)}>X</button>
      </p>
    )
  }
}

export default Todo
