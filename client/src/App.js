import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { withRouter } from 'react-router';

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
import Visualizer from './views/Visualizer.js';
import * as socketIOCtrl from './socketio_controller.js';
import { Widget as ChatWidget } from 'react-chat-widget';

socketIOCtrl.connect();

class App extends Component {
  render() {
    const usr = JSON.parse(window.localStorage.getItem('user')) || {};
    const userLoggedIn = JSON.parse(window.localStorage.getItem('user')) !== null;
    if (!userLoggedIn && this.props.location.pathname !== '/login') return <Redirect to="/login" />
    return (
        <div>
          { userLoggedIn && <Header /> }
          <main>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/visualizer" exact component={Visualizer} />
              <Route path="/users" exact component={UserList} />
              <Route path={`/users/${usr.id}`} exact component={SingleUser} />
              <Route path="/companies" exact component={CompanyList} />
              <Route path="/companies/:symbol" exact component={SingleCompany} />
              <Route path="/about" exact component={AboutUs} />
              <Route path="/login" exact render={(props) => (userLoggedIn ? <Redirect to="/" /> : <Login {...props} /> )} />
              <Redirect to="/" />
            </Switch>
          </main>
          <ToastContainer />
            {
              userLoggedIn && <ChatWidget
              handleNewUserMessage={socketIOCtrl.pushMessage}
              title="Live Chat"
              subtitle="Chat with all available users"
              badge={ true }
              senderPlaceHolder="💬 type your message ... "
            />
          }
        </div>
    );
  }
}

export default withRouter(App);
