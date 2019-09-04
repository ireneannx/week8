import React, { Component } from 'react';
import './App.css'

class Table extends Component {

  render() {

    var i = 0
    // if (!this.props.tdata) return null;

    // console.log(this.props.tdata)
    // const { tdata } = this.props

    // console.log("final data: ", tdata)

    // const { query } = this.props
    // console.log("query from table.js: ", query)

    // let newdata = (query == '') ? tdata : tdata.filter((data) => data.advertiserName.toLowerCase().includes(query.toLowerCase()))

    // return (

    //   <div>
    //     <table >
    //       <tr>
    //         <th>Brand Name</th>
    //         <th>First Campaign Name</th>
    //         <th>Count of campaigns inside brand</th>
    //       </tr>
    //       {newdata.length > 0 ? newdata.map((data) => <tr key={data.id}>

    //         <td>{data.name}</td>
    //         <td>{data.campaigns.length > 0 ? data.campaigns[0].name : "None"}</td>
    //         <td>{data.campaigns.length}</td>

    //       </tr>) : ""}
    //     </table>

    //   </div>
    // )


    if (!this.props.tdata) return null;

    console.log(this.props.tdata)
    const { tdata } = this.props

    console.log("final data: ", tdata)

    const { query, query2 } = this.props
    console.log("query from table.js: ", query)

    let newdata = (query == '') ? tdata : tdata.filter((data) => data.advertiserName.toLowerCase().includes(query.toLowerCase()))

    let newdata2 = (query2 == '') ? tdata : tdata.map((data) => data.campaigns.filter((cam) => {
      var date2 = cam.start_date
      date2 = new Date(date2.split('-')[2], date2.split('-')[1] - 1, date2.split('-')[0]);
      console.log("date2", date2)

      var today = this.props.today
      today = new Date(today.split('-')[2], today.split('-')[1] - 1, today.split('-')[0])
      var difference = (today - date2) / (8.64 * 10 ** 7)
      console.log("difference is", difference)
      // converting milliseconds to days"

      return query2 > difference ? true : false
    }))

    let arr2 = newdata2.map((data) => data.length)
    console.log("arr2: ", arr2)





    console.log("timeline array", newdata2)

    return (

      <div>
        <table >
          <tr>
            <th>Brand Name</th>
            <th>First Campaign Name</th>
            <th>Count of campaigns inside brand</th>
          </tr>
          {newdata.length > 0 ? newdata.map((data) =>

            <tr>
              {/* {console.log(data)} */}
              <td>{data.name}</td>
              <td>{data.campaigns.length > 0 ? data.campaigns[0].name : "None"}</td>
              {/* <td>{data.campaigns.length}</td> */}
              <td>{(query2 == '') ? data.campaigns.length : arr2[i++]}</td>

            </tr>) : ""}
        </table>

      </div>
    )


  }

};



export default Table;