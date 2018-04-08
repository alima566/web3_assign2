import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    const usr = JSON.parse(window.localStorage.getItem('user')) || {};
    return (
      <div className="home">
        <section className="hero is-info is-bold is-medium">
          <div className="hero-body">
            <div className="container">
              <span className="is-pulled-right title is-1" role="img" aria-label="smirk">😏</span>
              <h1 className="title is-2"> Discover the Stockr Solution.</h1>
              <h2 className="subtitle"> Your entire portfolio, in one place. <span role="img" aria-label="party">🎉</span></h2>
            </div>
          </div>
        </section>
        <section className="section container">
          <div className="columns">
            <Link to={`/users/${usr.id}`} className="column">
              <div className="portfolio notification">
                <h1 className="title is-3">Portfolio</h1>
                <p className="subtitle is-7">View your personal portfolio</p>
              </div>
            </Link>
            <Link to="/companies" className="column">
              <div className="company notification">
                <h1 className="title is-3">Companies</h1>
                <p className="subtitle is-7">Browse Companies in the system</p>
              </div>
            </Link>
            <Link to="/" className="column">
              <div className="stocks notification">
                <h1 className="title is-3">Stock Visializer</h1>
                <p className="subtitle is-7">Easily visualize your Stock options</p>
              </div>
            </Link>
            <Link to="/about" className="column">
              <div className="about notification">
                <h1 className="title is-3">About Us</h1>
                <p className="subtitle is-7">Find out a little more about this project</p>
              </div>
            </Link>
          </div>
        </section>
      </div>
    );
  }
}

export default Home;
