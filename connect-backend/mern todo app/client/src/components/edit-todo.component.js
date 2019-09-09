import React, { Component } from 'react';
import axios from 'axios'

class EditTodo extends Component {
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

  onChangeTodoCompleted = (e) => {
    this.setState({
      todo_completed: !this.state.todo_completed
    })
  }

  onSubmit = (e) => {
    e.preventDefault()
    const updatedObj = {
      todo_description: this.state.todo_description,
      todo_responsible: this.state.todo_responsible,
      todo_priority: this.state.todo_priority,
      todo_completed: this.state.todo_completed
    };
    axios.put(`http://localhost:4000/todos/${this.props.match.params.id}`, updatedObj)
      .then(console.log("pls update"))
      .catch((err) => console.log(err))
  }

  deleteOne = () => {
    console.log("params in delete: ", this.props)
    axios.delete(`http://localhost:4000/todos/${this.props.match.params.id}`)
      .then(console.log("item deleted"))
      .catch((err) => console.log(err))
  }

  render() {
    return (
      <div>
        <h3 align="center">Update Todo</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Description: </label>
            <input type="text"
              className="form-control"
              name="todo_description"
              value={this.state.todo_description}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label>Responsible: </label>
            <input
              type="text"
              className="form-control"
              name="todo_responsible"
              value={this.state.todo_responsible}
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
          <div className="form-check">
            <input className="form-check-input"
              id="completedCheckbox"
              type="checkbox"
              name="todo_completed"
              onChange={this.onChangeTodoCompleted}
              checked={this.state.todo_completed}
              value={this.state.todo_completed}
            />
            <label className="form-check-label" htmlFor="completedCheckbox">
              Completed
              </label>
          </div>

          <br />

          <div className="form-group">
            <input type="submit" value="Update Todo" className="btn btn-primary" />
          </div>
        </form>
        <div className="form-group">
          <button type="submit" value="Delete Todo" className="btn btn-danger" onClick={this.deleteOne} />
        </div>
      </div>
    );
  }
}

export default EditTodo