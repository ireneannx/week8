import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AddTodo } from '../action'
import { bindActionCreators } from 'redux'
import store from '../index'

class Todo extends Component {

  state = {
    id: "",
    todo: ""
  }

  onSubmit = (e) => {
    e.preventDefault();
    const todoitem = this.state

    store.dispatch({
      type: "ADDTODO",
      payload: todoitem
    })

  }

  onChange = (e) => {
    this.setState({
      todo: e.target.value,
      id: Math.random()
    })
  }

  render() {
    return (<div>
      <form onSubmit={this.onSubmit}>
        <input type="text" placeholder="add todo" onChange={this.onChange}></input>
        <button type="submit">Submit</button>
      </form>
    </div>);
  }
}



const mapDispatchToProps = dispatch => bindActionCreators({ AddTodo }, dispatch)


const mapStateToProps = (state) => {
  return {
    todoitems: state.TodoReducer.todoitems
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo);