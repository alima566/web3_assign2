import React, { Component } from 'react';
import Breadcrumb from '../../components/Breadcrumb.js';
import axios from 'axios';

import Summary from './Summary';
import Data from './Data';

class SingleCompany extends Component {
    constructor(props){
        super(props);
        this.state = {
          company: null,
          focusedTab: 0
        };
    }

    tabIsActive = (tab) => {
      return this.state.focusedTab === tab;
    };

    changeTab = (tab) => {
      this.setState({ focusedTab: tab });
    };

    componentDidMount(){
      axios.get(`/api/company/${this.props.match.params.symbol}`)
      .then((r) => {
        this.setState({ company: r.data });
      })
    }

  render() {
    let c = this.state.company;
    if (!c) return <div />;

    return (
      <div className="single-company">
        <Breadcrumb type="is-dark"/>
        <section className="container">
          <div className="columns">
            <div className="column is-3">
              <div className="box">
                <figure className="image">
                  { c.symbol && <img src={`/logos/${ c.symbol }.svg`} alt="Company Logo" /> }
                </figure>
                <hr></hr>
                <p className="title is-size-4 has-text-centered">{ c.name }</p>
              </div>
            </div>
            <div className="column">
              <div className="box">
                <div className="tabs is-medium">
                  <ul>
                    <li className={ (this.tabIsActive(0) ? 'is-active' : '') } onClick={ () => this.changeTab(0) }>
                      <a>
                        <span className="icon is-small"><i className="far fa-list-alt"></i></span>
                        <span>Summary</span>
                      </a>
                    </li>
                    <li className={ (this.tabIsActive(1) ? 'is-active' : '') } onClick={ () => this.changeTab(1) }>
                      <a>
                        <span className="icon is-small"><i className="fas fa-chart-pie"></i></span>
                        <span>Data</span>
                      </a>
                    </li>
                  </ul>
                </div>
                { this.tabIsActive(0) && this.state.company ? <Summary company={this.state.company} /> : <Data company={this.state.company} /> }
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default SingleCompany;
