import React, { Component } from 'react';
import './App.css'

class Header extends Component {

  render() {
    console.log("from header", this.props)
    const { query } = this.props
    const { tdata } = this.props

    return (
      <div style={{ display: "flex" }} className="App">
        {/* <!-- Search form --> */}
        <h3> Advertiser: </h3>
        <form class="form-inline">
          <input class="form-control mr-sm-2" type="search" placeholder="Search" value={query} onChange={this.props.updateQuery} />
          {/* <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> */}
        </form>



        <h3>Timeline: </h3>
        <select class="form-control" onChange={this.props.timelineSelect}>
          <option value="">Select</option>
          <option value="1095" >last 3 years</option>
          <option value="730">last 2 years </option>
          <option value="365">last year </option>


        </select>
      </div>
    );
  }
}

export default Header;