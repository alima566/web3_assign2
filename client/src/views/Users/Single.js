import React, { Component } from 'react';
import axios from 'axios';

import Breadcrumb from '../../components/Breadcrumb.js';
import UserDetails from './Details.js';
import UserPortfolio from './Portfolio.js';

class SingleUser extends Component {
  constructor(props){
    super(props);
    this.state = {
      user: {},
      focusedTab: 0
    };
  }
  
  componentDidMount() {
    let _id = this.props.match.params.id;
    axios.get(`https://jsonplaceholder.typicode.com/users/${_id}`)
    .then(r => {
      this.setState({ user: r.data });          
    }).catch(function (e) {
       console.error(`Error retreiving user (${_id})`, e);
    }); 
  }
  
  tabIsActive = (tab) => {
    return this.state.focusedTab === tab;
  };
  
  changeTab = (tab) => {
    this.setState({ focusedTab: tab });
  };
    
  render() {
    let u = this.state.user;
    return (
      <div>
        <Breadcrumb type="is-dark" />
        <section className="section container">
          <h4 className="title is-4">{u.name}</h4>
          <div className="tabs is-medium">
            <ul>
              <li className={ (this.tabIsActive(0) ? 'is-active' : '') } onClick={ () => this.changeTab(0) }><a>
                <span className="icon is-small"><i className="far fa-user"></i></span>
                <span>Details</span>
              </a></li>
              <li className={ (this.tabIsActive(1) ? 'is-active' : '') } onClick={ () => this.changeTab(1) }><a>
                <span className="icon is-small"><i className="fas fa-chart-line"></i></span>
                <span>Portfolio</span>
              </a></li>
            </ul>
          </div>
          { this.tabIsActive(0) ? <UserDetails user={ u } /> : <UserPortfolio user={ u } /> }
        </section>
      </div>
    );
  }
}

export default SingleUser;
