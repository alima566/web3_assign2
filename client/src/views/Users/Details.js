import React, { Component } from 'react';

class UserDetails extends Component {
    constructor(props){
        super(props);
        this.state = {
          showAddress: false,
          showCompany: false
        };
    }
 
  render() {
    let u = this.props.user;
    return (
      <div className="user-details box">
        <div className="card-content">
            <p className="header-field is-size-5 is-size-6-mobile">
              <i className="far fa-id-badge"></i>&nbsp;
              <span>{ u.id }</span>
            </p>
            <p className="header-field is-size-5 is-size-6-mobile">
              <i className="far fa-envelope"></i>&nbsp;
              <span>{ u.email }</span>
            </p>
            <p className="header-field is-size-5 is-size-6-mobile">
              <i className="fas fa-phone"></i>&nbsp;
              <span>{ u.phone }</span>
            </p>
            <br></br>
                <article className="company message is-link">
                  <div className="message-header" onClick={ () => { this.setState({showCompany: !this.state.showCompany }) } }>
                    <h5 className="subtitle is-5 has-text-light">
                      <i className="fas fa-building"></i>
                      <span>Company</span>
                    </h5>
                    { /* Must render both and conditionally show, as there is a bug with font awesome that won't re-draw svg on react lifecycle */}
                    <i className={`fas fa-caret-up ${ !this.state.showCompany ? 'is-hidden' : '' }`}></i> 
                    <i className={`fas fa-caret-down ${ this.state.showCompany ? 'is-hidden' : '' }`}></i>
                  </div>
                  {
                      u.company && 
                      <div className={`message-body ${ !this.state.showCompany ? 'is-hidden' : '' }`}>
                        <strong> { u.company.name } </strong>
                        <span className="is-block"> { u.company.catchPhrase } </span>
                        <span className="is-block"> { u.company.bs } </span>
                      </div>
                  }
                </article>
                <article className="address message is-info">
                  <div className="message-header" onClick={ () => { this.setState({showAddress: !this.state.showAddress }) } }>
                    <h5 className="subtitle is-5 has-text-light">
                      <i className="fas fa-map-marker-alt"></i>
                      <span>Address</span>
                    </h5>
                    { /* Must render both and conditionally show, as there is a bug with font awesome that won't re-draw svg on react lifecycle */}
                    <i className={`fas fa-caret-up ${ !this.state.showAddress ? 'is-hidden' : '' }`}></i> 
                    <i className={`fas fa-caret-down ${ this.state.showAddress ? 'is-hidden' : '' }`}></i>
                  </div>
                  {
                    u.address && 
                      <div className={`message-body ${ !this.state.showAddress ? 'is-hidden' : '' }`}>
                        <span className="is-block"> { `${u.address.suite} ${u.address.street}` } </span>
                        <span className="is-block"> { `${u.address.city} ${u.address.zipcode}` } </span>
                        <span className="is-block"> { `${u.address.geo.lat}, ${u.address.geo.lng}` } </span>
                      </div>
                  }
                </article>
             </div>
      </div>
    );
  }
}

export default UserDetails;
