import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'

//each row is given by the OneTodo component
const OneTodo = (props) => {

  console.log("One todo props", props);

  return (
    <tr>
      <td>{props.todo.todo_description}</td>
      <td>{props.todo.todo_responsible}</td>
      <td>{props.todo.todo_priority}</td>
      <td>
        <Link to={"/edit/" + props.todo._id}>Edit</Link>
      </td>
    </tr>
  );
}


class TodosList extends Component {

  state = {
    todos: []
  }

  componentDidMount() {
    console.log("inside cdm");


    axios.get("http://localhost:4000/todos") //dont put https or you will get SSL error 
      .then(res => {
        console.log(res.data);
        this.setState({
          todos: res.data
        })
      })
      .catch((err) => { console.log(err) })
  }


  render() {
    var i = 1;
    return (<div>

      <p>Todo List</p>

      <table className="table table-striped" style={{ marginTop: 20 }} >
        <thead>
          <tr>
            <th>Description</th>
            <th>Responsible</th>
            <th>Priority</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {this.state.todos.map((data) => {
            return (<OneTodo todo={data} key={i++} />)
          })}
        </tbody>
      </table>
    </div>);
  }
}

export default TodosList