import React, {Component} from 'react'
import Todo from './Todo'

class Todos extends Component {
  render (){
    var todos = this.props.todos.map(function(todo){
      return(
        <Todo
          key={todo.id}
          todo={todo}
          onDeleteTodo={this.props.onDeleteTodo}/>
      )
    }, this)
    return (
      <div className="todos">
      {todos}
      </div>
    )
  }
}

export default Todos
