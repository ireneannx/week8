import React, { Component } from 'react';
import axios from 'axios';

class Table extends Component {
  state = {
    tdata: []
  }

  //axios calls must be made in componentdidMount

  async componentDidMount() {
    await axios.get(`https://s3-ap-southeast-1.amazonaws.com/he-public-data/data%20(1)4614ba8.json`, { headers: { "Access-Control-Allow-Origin": "*" } })

      // get the chrome extension CORS to get the request 
      .then(res => {
        console.log(res)
        this.setState({
          tdata: res.data
        });
      })
  }

  render() {
    if (!this.state.tdata) return null
    console.log(this.state.tdata)
    const { tdata } = this.state
    return (
      <div>

        {tdata.map((data) => console.log(data.name))}


        {/* <table>
          <tr>
            {data.map((v) => (
              <td>{data.name}</td>)
            )}
          </tr>
        </table> */}
        {/* {data.map((val) => console.log(val.name))} */}

      </div>
    );

  }
}


export default Table;