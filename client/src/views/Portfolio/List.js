import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import formatCurrency from 'format-currency';

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
    let format = { format: '%s%v', symbol: '$' };
    return (
      <div className="user-portfolio box content">
        <table className="table is-fullwidth">
          <thead>
            <tr>
              <th onClick={ () => this.sortBy('company.symbol') }>Symbol</th>
              <th onClick={ () => this.sortBy('company.name') }>Name</th>
              <th onClick={ () => this.sortBy('owned') }>Number Owned</th>
              <th onClick={ () => this.sortBy('currentValue') }>Current Value</th>
            </tr>
          </thead>
          <tbody className="is-hoverable">
            {
              this.props.stocks.map((s, idx) => {
                return (
                  <tr key={idx}>
                    <td><Link to={`/companies/${s.company.symbol}`}>{ s.company.symbol }</Link></td>
                    <td><Link to={`/companies/${s.company.symbol}`}>{ s.company.name }</Link></td>
                    <td>{ s.owned }</td>
                    {
                      // Formats the current value to include commas.
                    }
                    <td>{ formatCurrency(s.currentValue, format) }</td>
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
