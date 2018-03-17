import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const routes = [
  { name: 'Home', path: '/', icon: 'fas fa-home' },
  { name: 'Users', path: '/users', icon: 'fas fa-users' },
  { name: 'Companies', path: '/companies', icon: 'far fa-building' },
  { name: 'About', path: '/about', icon: 'fas fa-info-circle' }
];

class Header extends Component {
  constructor(props){
    super(props);

    this.state = {
      menuVisible: false,
      user: JSON.parse(localStorage.getItem('user')) || { first: "First", last: "Last"}
    };
  }

  toggleMenu = () => this.setState({ menuVisible: !this.state.menuVisible });

  render() {
    return (
      <div>
        <nav className="navbar is-fixed-top has-shadow">
          <div className="navbar-brand">
            <span className="navbar-item">
              <Link to="/"><img src="/logo.jpg" alt="Stockr" width="112" height="28" /></Link>
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
                <Link to="/chat" className="button is-info">
                  <span className="icon is-small">
                    <i className="far fa-comments"></i>
                  </span>
                </Link>
              </div>
              <div className="navbar-item">
                <div className="tags has-addons">
                  <span className="tag is-medium is-primary">{`${this.state.user.first} ${this.state.user.last}`}</span>
                  <Link to="/login" className="tag is-medium logout">
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
