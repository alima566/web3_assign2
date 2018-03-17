import React, { Component } from 'react';
import axios from 'axios';

class CompanyData extends Component {
  constructor(props){
    super(props);
    this.state = {
      chartData: []
    };
  }

  monthChanged = (e) => {
    axios.get(`/api/company/${this.props.company.symbol}/info?month=${e.target.value}`)
    .then((r) => {
      this.setState({ chartData: r.data });
    })
  };

  render() {
    let c = this.props.company;
    return (
      <div className="column">
        <div className="select is-rounded" onChange={this.monthChanged}>
          <select>
            <option disabled selected>Select Month</option>
            <option>January</option>
            <option>February</option>
            <option>March</option>
            <option>April</option>
            <option>May</option>
            <option>June</option>
            <option>July</option>
            <option>August</option>
            <option>September</option>
            <option>October</option>
            <option>November</option>
            <option>December</option>
          </select>
        </div>
        <br></br><br></br>
        {
          this.state.chartData.length > 0 && <table className="table is-fullwidth">
              <thead>
                  <tr>
                      <th><i className="far fa-calendar"></i>&nbsp;Date</th>
                      <th><i className="fas fa-arrow-down"></i>&nbsp;Low</th>
                      <th><i className="fas fa-arrow-up"></i>&nbsp;High</th>
                      <th><i className="fas fa-flag-checkered"></i>&nbsp;Close</th>
                  </tr>
              </thead>
              <tbody className="is-hoverable">
                  {
                      this.state.chartData.map((c, idx) => {
                         return (
                            <tr key={idx}>
                              <td>{ c.date }</td>
                              <td>${ c.low }</td>
                              <td>${ c.high }</td>
                              <td><b>${ c.close }</b></td>
                            </tr>
                          )
                      })
                  }
              </tbody>
          </table>
        }
      </div>
    );
  }
}

export default CompanyData;
