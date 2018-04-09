import React, { Component } from 'react';
import { ResponsiveContainer, BarChart, Bar, Tooltip, XAxis, YAxis } from 'recharts';

class PortfolioSummary extends Component {
    constructor(props){
        super(props);
        this.state = {
          summary: []
        };
    }

    componentWillReceiveProps (nextProps) {
      this.setState({ summary: nextProps.summary })
    }

  render() {
    let r = this.props.summary;
    console.log(r);
    return (
      <div className="user-details box">
        <div className="card-content">
            <p className="header-field is-size-5 is-size-6-mobile">
              <i className="fas fa-hashtag"></i>&nbsp;
              <span>Total Number of Companies: { r.companyCount }</span>
            </p>
            <p className="header-field is-size-5 is-size-6-mobile">
              <i className="fas fa-chart-line"></i>&nbsp;
              <span>Total Number of Stocks: { r.stockCount }</span>
            </p>
            <p className="header-field is-size-5 is-size-6-mobile">
              <i className="fas fa-dollar-sign"></i>&nbsp;
              <span>Current Worth: { r.portfolioValue }</span>
            </p>
            <br></br>
             </div>
      </div>
    );
  }
}

export default PortfolioSummary;
