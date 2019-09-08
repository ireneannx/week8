import React, { Component } from 'react';
import axios from 'axios';

class CreateTodo extends Component {
  state = {
    todo_description: '',
    todo_responsible: '',
    todo_priority: '',
    todo_completed: false
  }
  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })


  }

  onSubmit = (e) => {
    e.preventDefault();

    const newTodo = {
      todo_description: this.state.todo_description,
      todo_responsible: this.state.todo_responsible,
      todo_priority: this.state.todo_priority,
      todo_completed: this.state.todo_completed
    }

    //axios call to the backend
    axios.post('http://localhost:4000/todos', newTodo)
      .then(res => console.log(res.data))

    this.setState({
      todo_description: '',
      todo_responsible: '',
      todo_priority: '',
      todo_completed: false
    })
  }

  render() {
    return (<div style={{ marginTop: 10 }}>
      <h3>Create New Todo</h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group">
          <label>Description: </label>
          <input type="text"
            className="form-control"
            // value={this.state.todo_description}
            name="todo_description"
            onChange={this.onChange}
          />
        </div>
        <div className="form-group">
          <label>Responsible: </label>
          <input
            type="text"
            className="form-control"
            // value={this.state.todo_responsible}
            name="todo_responsible"
            onChange={this.onChange}
          />
        </div>
        <div className="form-group">
          <div className="form-check form-check-inline">
            <input className="form-check-input"
              type="radio"
              name="todo_priority"
              id="priorityLow"
              value="Low"
              checked={this.state.todo_priority === 'Low'}
              onChange={this.onChange}
            />
            <label className="form-check-label">Low</label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input"
              type="radio"
              name="todo_priority"
              id="priorityMedium"
              value="Medium"
              checked={this.state.todo_priority === 'Medium'}
              onChange={this.onChange}
            />
            <label className="form-check-label">Medium</label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input"
              type="radio"
              name="todo_priority"
              id="priorityHigh"
              value="High"
              checked={this.state.todo_priority === 'High'}
              onChange={this.onChange}
            />
            <label className="form-check-label">High</label>
          </div>
        </div>

        <div className="form-group">
          <input type="submit" value="Create Todo" className="btn btn-primary" />
        </div>
      </form>
    </div>);
  }
}

export default CreateTodo