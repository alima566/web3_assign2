import React, { Component } from 'react';
import { Route } from 'react-router-dom';

//CSS
import './App.css';
import 'bulma/css/bulma.css';

//Components / Views
import Header from './components/Header.js';
import Login from './views/Login.js'
import Home from './views/Home.js';
import UserList from './views/Users/List.js';
import SingleUser from './views/Users/Single.js';
import CompanyList from './views/Company/List.js';
import SingleCompany from './views/Company/Single.js';
import AboutUs from './views/About.js';

class App extends Component {
  render() {
    return (
        <div>
          <Header />
          <main>
            <Route path="/" exact component={Home} />
            <Route path="/users" exact component={UserList} />
            <Route path="/users/:id" exact component={SingleUser} />
            <Route path="/companies" exact component={CompanyList} />
            <Route path="/companies/:symbol" exact component={SingleCompany} />
            <Route path="/about" exact component={AboutUs} />
            <Route path="/login" exact component={Login} />
          </main>
        </div>
    );
  }
}

export default App;
