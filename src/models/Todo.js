import axios from 'axios'

function TodoModel() {}

TodoModel.all = function(){
  var request = axios.get("http://localhost:4000/todos")
  return request
}

TodoModel.create = function(todo){
  var request = axios.post("http://localhost:4000/todos", todo)
  return request
}

TodoModel.deleteTodo = function(todoId){
  var request = axios.delete(`http://localhost:4000/todos/${todoId}`)
  return request
}

module.exports = TodoModel
