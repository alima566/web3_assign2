import React, { Component } from 'react';
import userPortfolio from '../../data/userStockPortfolio.json';
import { Link } from 'react-router-dom';
import axios from 'axios';

class PortfolioList extends Component {
  constructor(props){
    super(props);
    this.state = {
      stocks: [],
      sort: {
        symbol: "DESC",
        numberOwned: "DESC",
        currentVal: "ASC"
      }
    };
  }

  componentDidMount(){
    axios.get(`/api/user/${this.props.user.id}/portfolio`)
    .then(r => {
      this.sortBy('symbol', r.data);
    }).catch(function (e) {
      console.error("Error retreiving user portfolio", e);
    });
  }

  sortBy = (param, sourceArray) => {
    let delta = { stocks: null, sort: {} };
    let order = this.state.sort[param] === "ASC" ? "DESC" : "ASC";

    delta.sort[param] = order;
    delta.stocks = (sourceArray || this.state.stocks).sort((a, b) => {
      //Handle Numbers
      if (typeof a[param] === "number") {
        return (order === "ASC")
        ? (a[param] - b[param])
        : (b[param] - a[param]);
      }

      return (order === "ASC")
      ? (a[param]).localeCompare(b[param])
      : (b[param]).localeCompare(a[param]);
    });

    this.setState(delta);
  }

  render() {
    return (
      <div className="user-portfolio box content">
        <table className="table is-fullwidth">
          <thead>
            <tr>
              <th onClick={ () => this.sortBy('symbol') }>Symbol</th>
              <th onClick={ () => this.sortBy('name') }>Name</th>
              <th onClick={ () => this.sortBy('owned') }>Number Owned</th>
              <th onClick={ () => this.sortBy('amount') }>Current Value</th>
            </tr>
          </thead>
          <tbody className="is-hoverable">
            {
              this.state.stocks.map((s, idx) => {
                return (
                  <tr key={idx}>
                    <td><Link to={`/companies/${s.symbol}`}>{ s.symbol }</Link></td>
                    <td><Link to={`/companies/${s.symbol}`}>{ 'name' }</Link></td>
                    <td>{ s.owned }</td>
                    <td>{ s.value }</td>
                  </tr>
                )
              })
            }

          </tbody>
        </table>
      </div>
    );
  }
}

export default PortfolioList;
