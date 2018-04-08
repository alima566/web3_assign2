import React, { Component } from 'react';
import userPortfolio from '../../data/userStockPortfolio.json';
import { Link } from 'react-router-dom';
import axios from 'axios';

class UserList extends Component {
    constructor(props){
        super(props);
        this.state = {
          stocks: [],
          summary: [],
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
          this.setState({ summary: r.data });
        }).catch(function (e) {
           console.error(`Error retreiving user (${this.props.user.id})`, e);
        });

        //Reduce, then default sort to amount ASC
        let reduced = this.reduceData();
        this.sortBy('amount', reduced);
    }

    reduceData = () => {
        let _reduced = userPortfolio.reduce((arr, p) => {
          if ( p.userId === this.props.user.id ){
              arr.push({
                id: p.id,
                symbol: p.symbol,
                amount: p.amount,
                name: ''
              });
          }
          return arr;
        }, []);

        return _reduced;
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
    //console.log(this.props.user);
    return (
      <div className="user-portfolio box content">
        <table className="table is-fullwidth">
            <thead>
                <tr>
                    <th onClick={ () => this.sortBy('symbol') }>Symbol</th>
                    <th onClick={ () => this.sortBy('name') }>Name</th>
                    <th>Number Owned</th>
                    <th onClick={ () => this.sortBy('amount') }>Current Value</th>
                </tr>
            </thead>
            <tbody className="is-hoverable">
                {
                    this.state.summary.map((s, idx) => {
                       return (
                          <tr key={idx}>
                            <td><Link to={`/companies/${s.symbol}`}>{ s.symbol }</Link></td>
                            <td><Link to={`/stocks/${s.symbol}`}>{ s.name }</Link></td>
                            <td>{ s.owned }</td>
                            <td>{ s.amount }</td>
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

export default UserList;
