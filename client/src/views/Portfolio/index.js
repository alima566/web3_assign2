import React, { Component } from 'react';
import axios from 'axios';

import Breadcrumb from '../../components/Breadcrumb.js';
import PortfolioSummary from './Summary.js';
import PortfolioList from './List.js';

class UserPortfolio extends Component {
  constructor(props){
    super(props);
    this.state = {
      user: {},
      focusedTab: 0
    };
  }

  tabIsActive = (tab) => {
    return this.state.focusedTab === tab;
  };

  changeTab = (tab) => {
    this.setState({ focusedTab: tab });
  };

  render() {
    let u = this.state.user;
    const usr = JSON.parse(window.localStorage.getItem('user')) || {};
    return (
      <div>
        <Breadcrumb type="is-dark" />
        <section className="section container">
          <h4 className="title is-4">{usr.first + ' ' + usr.last}</h4>
          <div className="tabs is-medium">
            <ul>
              <li className={ (this.tabIsActive(0) ? 'is-active' : '') } onClick={ () => this.changeTab(0) }><a>
                <span className="icon is-small"><i className="far fa-list-alt"></i></span>
                <span>Summary</span>
              </a></li>
              <li className={ (this.tabIsActive(1) ? 'is-active' : '') } onClick={ () => this.changeTab(1) }><a>
                <span className="icon is-small"><i className="fas fa-list"></i></span>
                <span>List</span>
              </a></li>
            </ul>
          </div>
          { this.tabIsActive(0) ? <PortfolioSummary user={ usr } /> : <PortfolioList user={ usr } /> }
        </section>
      </div>
    );
  }
}

export default UserPortfolio;