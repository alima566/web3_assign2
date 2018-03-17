import React, { Component } from 'react';
import axios from 'axios';

class CompanySummary extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    // axios.get(`/api/company/${this.props.match.params.symbol}`)
    // .then((r) => {
    //   this.setState({ company: r.data });
    // })
  }

  render() {
    let c = this.props.company;
    return (
      <div className="columns">
        <div className="column is-5">
          <span className="is-size-6 is-block">
            <i className="fas fa-chart-line"></i>
            <strong> Symbol: </strong> { c.symbol }
          </span>
          <span className="is-size-6 is-block">
            <i className="fas fa-industry"></i>
            <strong> Sector: </strong> { c.sector }
          </span>
          <span className="is-size-6 is-block">
            <i className="fas fa-cog"></i>
            <strong> Sub-Industry: </strong> { c.subindustry }
          </span>
          <span className="is-size-6 is-block">
            <i className="fas fa-map-marker-alt"></i>
            <strong> Address: </strong> { c.address }
          </span>
          <i>Added {c.date_added} </i>
        </div>
        <div className="column">
          chart to go here
        </div>
      </div>
    );
  }
}

export default CompanySummary;
