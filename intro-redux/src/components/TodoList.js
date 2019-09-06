import React, { Component } from 'react';
import { connect } from 'react-redux';


class TodoList extends Component {

  render() {
    return (<div>
      <ul>
        {this.props.data.map((d) => (
          <div>
            <li>{d.todo}<button type="submit" >Delete</button> </li>
          </div>
        )
        )}
      </ul>
    </div>);
  }
}



const mapStateToProps = (state) => {
  return {
    data: state.TodoReducer.todoitems
  }
}
export default connect(mapStateToProps)(TodoList);
