import React, { Component } from 'react';
import Breadcrumb from '../../components/Breadcrumb.js';
import { Link } from 'react-router-dom';
import axios from 'axios';

class CompanyList extends Component {
  constructor(props){
    super(props);
    this.state = {
      companies: []
    };
  }

  componentDidMount(){
    axios.get('/api/companies')
    .then((r) => {
      this.setState({ companies: r.data.sort((a, b) => a.symbol.localeCompare(b.symbol)) });
    })
  }

  render() {
    return (
      <div className="company-list">
        <section className="hero is-warning is-bold">
          <div className="hero-body">
            <div className="container">
              <i className="far fa-building fa-7x is-pulled-right"></i>
              <h1 className="title">Browse Companies</h1>
            </div>
          </div>
        </section>

        <Breadcrumb />

        <section className="section container">
          {
              this.state.companies.map(c => {
                  return <Link to={`/companies/${c.symbol}`} key={c.symbol}>
                      <div className="box">
                        <div className="columns is-mobile">
                          <div className="column is-one-quarter-desktop is-half-mobile">
                            <figure className="image">
                              <img src={`/logos/${c.symbol}.svg`} alt="Company Logo" />
                            </figure>
                          </div>
                          <div className="column"> </div>
                          <div className="column is-5">
                            <h3 className="subtitle is-3 is-pulled-right">{c.symbol}</h3>
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

export default CompanyList;
