import React, { Component } from 'react';
import axios from 'axios';

class PortfolioSummary extends Component {
    constructor(props){
        super(props);
        this.state = {
          summary: []
        };
    }

    componentDidMount() {
      axios.get(`/api/user/${this.props.user.id}/summary`)
      .then(r => {
          this.setState({ summary: r.data });
        }).catch(function (e) {
           console.error("Error retreiving user summary", e);
        });
    }

  render() {
    let r = this.state.summary;
    console.log(r);
    return (
      <div className="user-details box">
        <div className="card-content">
            <p className="header-field is-size-5 is-size-6-mobile">
              <i className="fas fa-hashtag"></i>&nbsp;
              <span>Total Number of Companies: { r.length }</span>
            </p>
            <p className="header-field is-size-5 is-size-6-mobile">
              <i className="fas fa-chart-line"></i>&nbsp;
              <span>Total Number of Stocks: {  }</span>
            </p>
            <p className="header-field is-size-5 is-size-6-mobile">
              <i className="fas fa-dollar-sign"></i>&nbsp;
              <span>Current Worth: {  }</span>
            </p>
            <br></br>
             </div>
      </div>
    );
  }
}

export default PortfolioSummary;
