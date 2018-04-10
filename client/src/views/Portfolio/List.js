import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import formatCurrency from 'format-currency';

class PortfolioList extends Component {
  constructor(props){
    super(props);
    this.state = {
      stocks: [],
      sort: {
        "company.symbol": "DESC",
        "company.name": "DESC",
        "owned": "DESC",
        "currentValue": "ASC"
      }
    };
  }

  componentDidMount(){
    this.sortBy('currentValue');
  }

  sortBy = (param, sourceArray) => {
    let delta = { stocks: null, sort: {} };
    let order = this.state.sort[param] === "ASC" ? "DESC" : "ASC";

    delta.sort[param] = order;
    delta.stocks = this.props.stocks.sort((a, b) => {
      let comps = param.split(".");
      let l1 = comps[0];
      let l2 = comps[1];

      //Handle Numbers
      if (typeof a[param] === "number") {
        return (order === "ASC")
        ? (l2 ? (a[l1][l2] - b[l1][l2]) : (a[l1] - b[l1]))
        : (l2 ? (b[l1][l2] - a[l1][l2]) : (b[l1] - a[l1]));
      }

      return (order === "ASC")
      ? (l2 ? (a[l1][l2].localeCompare(b[l1][l2])) : (a[l1].localeCompare(b[l1])))
      : (l2 ? (b[l1][l2].localeCompare(a[l1][l2])) : (b[l1].localeCompare(a[l1])));
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
              this.state.stocks.map((s, idx) => {
                return (
                  <tr key={idx}>
                    <td><Link to={`/companies/${s.company.symbol}`}>{ s.company.symbol }</Link></td>
                    <td><Link to={`/companies/${s.company.symbol}`}>{ s.company.name }</Link></td>
                    <td>{ s.owned }</td>
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
