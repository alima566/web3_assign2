import React, { Component } from 'react';
import axios from 'axios';
import { ResponsiveContainer, PieChart, Pie, Tooltip } from 'recharts';
import formatCurrency from 'format-currency';

class PortfolioSummary extends Component {
    constructor(props){
        super(props);
        this.state = {
          userSummary: []
        };
    }

    componentDidMount() {
      axios.get(`/api/user/${this.props.user.id}/summary`)
      .then(r => {
          this.setState({ userSummary: r.data });
        }).catch(function (e) {
           console.error("Error retreiving user summary", e);
        });
    }

    componentWillReceiveProps (nextProps) {
      this.setState({ summary: nextProps.summary, user: nextProps.user })
    }

    render() {
      let r = this.props.summary;
      let format = { format: '%s%v', symbol: '$' };

      return (
        <div className="columns">
          <div className="user-details box column is-5">
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
                  <span>Current Worth: { formatCurrency(r.portfolioValue, format) }</span>
              </p>
              <br></br>
            </div>
          </div>

          <div className="column">
            {
              this.state.userSummary.length > 0 && <ResponsiveContainer height={300}>
                <PieChart width={730} height={250}>
                  <Pie nameKey="symbol" data={ this.state.userSummary } dataKey="percentage" fill="#8884d8" />
                  <Tooltip />
                </PieChart>
                </ResponsiveContainer>
            }
          </div>

        </div>
      );
    }
}

export default PortfolioSummary;
