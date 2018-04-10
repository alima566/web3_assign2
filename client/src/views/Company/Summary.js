import React, { Component } from 'react';
import { ResponsiveContainer, BarChart, Bar, Tooltip, XAxis, YAxis } from 'recharts';
import axios from 'axios';

class CompanySummary extends Component {
  constructor(props){
    super(props);
    this.state = {
      closeSummary: []
    };
  }

  componentDidMount(){
    axios.get(`/api/company/${this.props.company.symbol}/info/close`)
    .then((r) => {
      console.log("mounted summary, got data", r.data);
      this.setState({ closeSummary: r.data });
    })
  }

  render() {
    let c = this.props.company;
    return (
      <div className="columns">
        <div className="column is-4">
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
          <i>{ c.date_added ? `Added ${c.date_added}` : '' }</i>
        </div>
        <div className="column">
          {
            this.state.closeSummary.length > 0 && <ResponsiveContainer height={300}>
              <BarChart data={this.state.closeSummary}>
                <XAxis dataKey="month.short" />
                <YAxis hide={true}/>
                <Tooltip />
                <Bar type="monotone" dataKey="close" barSize={22} fill="#8884d8"/>
              </BarChart>
            </ResponsiveContainer>
          }
        </div>
      </div>
    );
  }
}

export default CompanySummary;
