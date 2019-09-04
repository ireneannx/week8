import React from 'react';
import './App.css';
import Table from './Table'
import Header from './Header'
import axios from 'axios';

class App extends React.Component {
  state = {
    tdata: [],
    query: "",
    today: '',
    query2: ''
  }

  //axios calls must be made in componentdidMount

  async componentDidMount() {
    await axios.get(`https://s3-ap-southeast-1.amazonaws.com/he-public-data/data%20(1)4614ba8.json`, { headers: { "Access-Control-Allow-Origin": "*" } })

      // get the chrome extension CORS to get the request 
      .then(async (res) => {
        console.log(res)
        await this.setState({ tdata: res.data }); //put res.data not res. otherwise it will take in the blank res
      })

    //find todays date
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;

    var yyyy = today.getFullYear();
    if (dd < 10) {
      dd = '0' + dd;
    }
    if (mm < 10) {
      mm = '0' + mm;
    }
    var today = dd + '-' + mm + '-' + yyyy;

    this.setState({
      today: today
    })

    console.log("state: ", this.state)
  }

  //for searching
  updateQuery = (e) => {
    this.setState({
      query: e.target.value
    })
    console.log(this.state.query);
  }

  //for timeline
  timelineSelect = (e) => {
    this.setState({
      query2: e.target.value
    })

  }

  render() {
    return (
      <div>
        <Header tdata={this.state.tdata} query={this.state.query} updateQuery={this.updateQuery} timelineSelect={this.timelineSelect} />

        <br></br>
        <hr></hr>
        <h6>Hello {this.state.query} !</h6>
        <br></br>
        <hr></hr>
        <Table tdata={this.state.tdata} query={this.state.query} query2={this.state.query2} today={this.state.today} />
      </div>
    );
  }
}

export default App;


