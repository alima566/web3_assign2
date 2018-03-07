import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

const routes = [
  { name: 'Home', path: '/', icon: 'fas fa-home' },
  { name: 'Users', path: '/users', icon: 'fas fa-users' },
  { name: 'Stocks', path: '/stocks', icon: 'fas fa-chart-line' },
  { name: 'About', path: '/about', icon: 'fas fa-info-circle' }
];

class Header extends Component {
  constructor(props){
    super(props);
    this.state = {
      menuVisible: false
    };
  }

  toggleMenu = () => this.setState({ menuVisible: !this.state.menuVisible });

  render() {
    return (
      <div>
        <nav className="navbar is-fixed-top has-shadow">
          <div className="navbar-brand">
            <span className="navbar-item">
              <NavLink to="/"><img src="/logo.jpg" alt="Stockr" width="112" height="28" /></NavLink>
            </span>
            <div className="navbar-burger burger" data-target="headerNavBar" onClick={this.toggleMenu}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div id="headerNavBar" className={`navbar-menu ${ this.state.menuVisible ? 'is-active' : '' }`}>
            <div className="navbar-end">
              <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link">Menu</a>
                <div className="navbar-dropdown is-boxed is-right">
                {
                    routes.map( (route, ind) => {
                      return (
                        <NavLink key={ ind } className="navbar-item" to={ { pathname: route.path} } onClick={ this.showMenu }><i className={ route.icon }></i>&nbsp;{ route.name }</NavLink>
                      );
                    })
                }
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
