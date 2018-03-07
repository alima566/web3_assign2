import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

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
                  <NavLink className="navbar-item" activeClassName="is-active" exact to="/" onClick={this.toggleMenu}>Home</NavLink>
                  <NavLink className="navbar-item" activeClassName="is-active" to="/users" onClick={this.toggleMenu}>Users</NavLink>
                  <NavLink className="navbar-item" activeClassName="is-active" to="/stocks" onClick={this.toggleMenu}>Stocks</NavLink>
                  <NavLink className="navbar-item" activeClassName="is-active" to="/about" onClick={this.toggleMenu}>About Us</NavLink>
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
