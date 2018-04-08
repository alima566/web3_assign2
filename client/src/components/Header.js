import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const routes = [
  { name: 'Home', path: '/', icon: 'fas fa-home' },
  { name: 'Users', path: '/users', icon: 'fas fa-users' },
  { name: 'Companies', path: '/companies', icon: 'far fa-building' },
  { name: 'Visualizer', path: '/visualizer', icon: 'fas fa-chart-line' },
  { name: 'About', path: '/about', icon: 'fas fa-info-circle' }
];

class Header extends Component {
  constructor(props){
    super(props);
    this.state = {
      menuVisible: false
    };
  }

  logout = () => {
    window.localStorage.removeItem('user');
  };

  toggleMenu = () => this.setState({ menuVisible: !this.state.menuVisible });

  render() {
    const usr = JSON.parse(window.localStorage.getItem('user')) || {};
    return (
      <div>
        <nav className="navbar is-fixed-top has-shadow">
          <div className="navbar-brand">
            <span className="navbar-item">
              <Link to="/"><img src="/logo.png" alt="Stockr" width="112" height="28" /></Link>
            </span>
            <div className="navbar-burger burger" data-target="headerNavBar" onClick={this.toggleMenu}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div id="headerNavBar" className={`navbar-menu ${ this.state.menuVisible ? 'is-active' : '' }`}>
            <div className="navbar-start">
              <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link">Menu</a>
                <div className="navbar-dropdown is-boxed is-right">
                {
                    routes.map( (route, ind) => {
                      return (
                        <Link key={ ind } className="navbar-item" to={ { pathname: route.path} } onClick={ this.showMenu }><i className={ route.icon }></i>&nbsp;{ route.name }</Link>
                      );
                    })
                }
                </div>
              </div>
            </div>

            <div className="navbar-end">
              <div className="navbar-item">
                <div className="tags has-addons">
                  <span className="tag is-medium is-primary">{`${usr.first} ${usr.last}`}</span>
                  <Link to="/login" className="tag is-medium logout" onClick={this.logout}>
                    <i className="fas fa-sign-out-alt"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
