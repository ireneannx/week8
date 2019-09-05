import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DecCount, IncCount } from './action'
import { bindActionCreators } from 'redux'


class Counter extends Component {

  render() {
    console.log(this.props)
    return (
      <div>
        <h1> Count: {this.props.count}</h1>
        <button onClick={this.props.IncCount}>inc</button>
        <button onClick={this.props.DecCount}>dec</button>
      </div>
    );
  }
}

//to allow DecCount and IncCount into the porps of the Counter Class

const mapDispatchToProps = dispatch => bindActionCreators({
  DecCount, IncCount
}, dispatch)

// to allow state from redux store to be in the props of the counter class
const mapStateToProps = (state) => {
  return {
    count: state.Count.count
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter) //note the order in which they appear 