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
import StockList from './views/Stocks/List.js';
import SingleStock from './views/Stocks/Single.js';
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
            <Route path="/stocks" exact component={StockList} />
            <Route path="/stocks/:symbol" exact component={SingleStock} />
            <Route path="/about" exact component={AboutUs} />
          </main>
        </div>
    );
  }
}

export default App;
