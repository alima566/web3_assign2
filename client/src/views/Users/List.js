import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../../components/Breadcrumb.js';
import axios from 'axios';

class UserList extends Component {
  constructor(props){
    super(props);
    this.state = {
      users: []
    };
  }
  
  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users/`)
    .then(r => {
      this.setState({users: r.data.sort((a, b) => a.name.localeCompare(b.name))});          
    }).catch(function (e) {
       console.error('Error retreiving users', e);
    }); 
  }
  
    
  render() {
    return (
      <div className="user-list">
        <section className="hero is-info is-bold">
          <div className="hero-body">
            <div className="container">
              <i className="fas fa-users fa-7x is-pulled-right"></i>
              <h1 className="title">User List</h1>
            </div>
          </div>
        </section>
    
        <Breadcrumb color="is-dark"  />
        
        <section className="section container">
          <div className="box content"> 
          {
            this.state.users.map( u => {
              return (
              <Link to={`/users/${u.id}`} key={u.id}>
                <div className="person">
                  <p className="title is-4">{u.name}</p>
                  <p className="subtitle is-5">{`@${u.username}`}</p>
                </div>
              </Link>
              );
            })
          }
          </div>
        </section>
      </div>
    );
  }
}

export default UserList;