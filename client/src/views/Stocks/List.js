import React, { Component } from 'react';
import Breadcrumb from '../../components/Breadcrumb.js';
import stocksMaster from '../../data/stocks.json';
import { Link } from 'react-router-dom';

class StockList extends Component {
  constructor(props){
    super(props);
    this.state = {
      stocks: stocksMaster.sort((a, b) => a.symbol.localeCompare(b.symbol))
    };
  }
  
    
  render() {
    return (
      <div className="stock-list">
        <section className="hero is-danger is-bold">
          <div className="hero-body">
            <div className="container">
              <i className="fas fa-chart-line fa-7x is-pulled-right"></i>
              <h1 className="title">Stocks List</h1>
            </div>
          </div>
        </section>
        
        <Breadcrumb />
        
        <section className="section container">
          {
              this.state.stocks.map(s => {
                  return <Link to={`/stocks/${s.symbol}`} key={s.symbol}>
                      <div className="box">
                        <div className="columns is-mobile">
                          <div className="column is-one-quarter-desktop is-half-mobile">
                            <figure className="image">
                              <img src={`/logos/${s.symbol}.svg`} alt="Company Logo" />
                            </figure>
                          </div>
                          <div className="column"> </div>
                          <div className="column is-5">
                            <h3 className="subtitle is-3 is-pulled-right">{s.symbol}</h3>
                          </div>
                        </div>
                      </div>
                  </Link>
              })
          }
        </section>
      </div>
    );
  }
}

export default StockList;
