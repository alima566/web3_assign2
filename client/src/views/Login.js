import React, { Component } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: 'mdanelutv@wix.com',
      password: ''
    }
  }

  login = (e) => {
    e.preventDefault();
    axios.post('/api/user/login', this.state)
    .then((r) => {
      window.localStorage.setItem("user", JSON.stringify(r.data));
      this.props.history.push("/");
    }, (e) => {
      toast.error(`Unable to authenticate user`, { autoClose: 8000, position: toast.POSITION.TOP_CENTER });
    });
  }

  render() {
    return (
      <section className="login hero is-fullheight">
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="column is-4 is-offset-4">
              <img src="/logo.png" alt="Logo" />
              <h3 className="title has-text-grey">Login</h3>
              <p className="subtitle has-text-grey">Please login to proceed.</p>
              <div className="box">
                <form onSubmit={this.login}>
                  <div className="field">
                    <div className="control">
                      <input defaultValue={ this.state.email } onChange={ (e) => this.setState({ email: e.target.value }) } className="input is-large" type="email" placeholder="Your Email" />
                    </div>
                  </div>

                  <div className="field">
                    <div className="control">
                      <input onChange={ (e) => this.setState({ password: e.target.value }) } className="input is-large" type="password" placeholder="Your Password" />
                    </div>
                  </div>
                  <button className="button is-block is-info is-large is-fullwidth" disabled={ this.state.password.length === 0 || this.state.email.length === 0 }>Login</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Login;
