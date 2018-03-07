import React, { Component } from 'react';
import Breadcrumb from '../../components/Breadcrumb.js';
import stocksMaster from '../../data/stocks.json';

class SingleStock extends Component {
    constructor(props){
        super(props);
        this.state = {
          stock: stocksMaster.find(s => s.symbol === props.match.params.symbol) || {}
        };
    }
    
  render() {
    let s = this.state.stock;
    return (
      <div className="single-stock">
        <Breadcrumb type="is-dark"/>
        <section className="section">
          <div className="tile is-ancestor">
            <div className="tile is-5 is-vertical is-parent">
              <article className="tile is-child notification is-info">
                <p className="title">{ s.name }</p>
                <figure className="image">
                  <img src={`/logos/${ s.symbol }.svg`} alt="Company Logo" />
                </figure>
              </article>
              <div className="tile is-child box">
                <span className="is-size-5 is-block">
                  <i className="fas fa-chart-line"></i>
                  <strong> Symbol: </strong> { s.symbol }
                </span>
                <span className="is-size-5 is-block">
                  <i className="fas fa-industry"></i>
                  <strong> Sector: </strong> { s.sector } 
                </span>
                <span className="is-size-5 is-block">
                  <i className="fas fa-cog"></i>
                  <strong> Sub-Industry: </strong> { s.subIndustry } 
                </span>
                <span className="is-size-5 is-block">
                  <i className="fas fa-map-marker-alt"></i>
                  <strong> Address: </strong> { s.address } 
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default SingleStock;
