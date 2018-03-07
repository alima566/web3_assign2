import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

class Breadcrumb extends Component {
  render() {
      let { location } = this.props;
      let rootPath = location.pathname.split('/')[1];
      let rootLabel = rootPath.replace(/(^|\s)\S/g, char => char.toUpperCase());
      let isSecondLevel = this.props.match.path.includes(':');

        return (
           <nav className={`navbar breadcrumb has-shadow ${this.props.type || ''}`} aria-label="breadcrumbs">
              <div className="navbar-item is-fluid">
                <ul>
                  <li><Link to="/">Home</Link></li>
                  <li className={`${ !isSecondLevel ? 'is-active' : ''}`}><Link to={`/${rootPath}`}>{ rootLabel }</Link></li>
                  { isSecondLevel && <li className="is-active"><Link to={ location.pathname }>{ rootLabel.substring(0, rootLabel.length - 1) }</Link></li> }
                </ul>
              </div>
            </nav>
        );
  }
}

export default withRouter(Breadcrumb);
