import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PortfolioList extends Component {
  constructor(props){
    super(props);
    this.state = {
      stocks: {},
      sort: {
        symbol: "DESC",
        numberOwned: "DESC",
        currentVal: "ASC"
      }
    };
  }

  componentWillReceiveProps (nextProps) {
    this.setState({ stocks: nextProps.stocks })
  }

  sortBy = (param, sourceArray) => {
    let delta = { stocks: null, sort: {} };
    let order = this.state.sort[param] === "ASC" ? "DESC" : "ASC";

    delta.sort[param] = order;
    delta.stocks = (sourceArray || this.props.stocks).sort((a, b) => {
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
    let r = this.props.stocks;
    console.log(r);
    return (
      <div className="user-portfolio box content">
        <table className="table is-fullwidth">
          <thead>
            <tr>
              <th onClick={ () => this.sortBy('symbol') }>Symbol</th>
              <th onClick={ () => this.sortBy('name') }>Name</th>
              <th onClick={ () => this.sortBy('number') }>Number Owned</th>
              <th onClick={ () => this.sortBy('amount') }>Current Value</th>
            </tr>
          </thead>
          <tbody className="is-hoverable">
            {
              r.map((s, idx) => {
                return (
                  <tr key={idx}>
                    <td><Link to={`/companies/${s.company.symbol}`}>{ s.company.symbol }</Link></td>
                    <td><Link to={`/companies/${s.company.symbol}`}>{ s.company.name }</Link></td>
                    <td>{ s.owned }</td>
                    <td>{ s.currentValue }</td>
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
