import React, {Component} from 'react'
import TodoModel from '../models/Todo'
import Todos from '../components/Todos'
import CreateTodoForm from '../components/CreateTodoForm'

class TodosContainer extends Component {
  constructor(){
    super()
    this.state={
      todos:[]
    }
  }
  componentDidMount(){
    this.fetchData()
  }
  fetchData(){
    TodoModel.all().then(function(res){
      this.setState({
        todos: res.data,
        todo: ''
      })
    }.bind(this))
  }
  createTodo(todo){
    var newTodo = {body: todo, completed: false}
    TodoModel.create(newTodo).then(function(res){
    var todos = this.state.todos
    todos.push(res.data)
    this.setState({todos})
  }.bind(this))
  }
  deleteTodo(todo){
    TodoModel.deleteTodo(todo.id).then(function(res){
      var todos = this.state.todos
      var todosMinusDeleted = todos.filter((eachTodo) => !(eachTodo.id === todo.id))
      this.setState({
        todos: todosMinusDeleted
      })

    }.bind(this))
  }
  render(){
    TodoModel.all().then(function(res){
      console.log(res);
    })
    return (
      <div className="todosContainer">
        <Todos todos={this.state.todos}
        onDeleteTodo={this.deleteTodo.bind(this)}/>
        <CreateTodoForm createTodo={this.createTodo.bind(this)} />
      </div>
    )
  }
}

export default TodosContainer
