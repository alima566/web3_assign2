import React, { Component } from 'react';
import Breadcrumb from '../components/Breadcrumb.js';

class AboutUs extends Component {
  render() {
    return (
      <div>
        <section className="hero is-link is-bold">
          <div className="hero-body">
            <div className="container">
                <i className="far fa-smile fa-6x is-pulled-right"></i>
                <h1 className="title">Discover who we are.</h1>
            </div>
          </div>
        </section>
        <Breadcrumb />
        <section className="about-us section container">
            <div className="card">
              <div className="card-content">
                <div className="is-pulled-right">
                  <a href="https://www.linkedin.com/in/reniro/" target="_blank" rel="noopener noreferrer">
                    <i className="linkedin fab fa-linkedin"></i>
                  </a>
                </div>
                <div className="media">
                    <div className="media-left">
                    <a href="https://www.linkedin.com/in/reniro/" target="_blank" rel="noopener noreferrer">
                      <figure className="avatar image is-64x64">
                        <img src="https://media.licdn.com/dms/image/C5603AQHywqYf6lQwiA/profile-displayphoto-shrink_200_200/0?e=1526497200&v=alpha&t=7imgITUv7WU7_5TNiaMnU4X1SQ2a4W8l9l1imX7Ugq0" alt="User" />
                      </figure>
                      </a>
                    </div>
                    <div className="media-content">
                      <p className="title is-5">Renato Niro</p>
                      <p className="subtitle is-5">@reniro</p>
                    </div>
                </div>
                <div className="content">
                  Renato is a fourth year Computer Information Systems Student at <a href="http://www.mtroyal.ca/" target="_blank" rel="noopener noreferrer">Mount Royal University.</a> As an aspiring Full Stack Developer, he created an iOS application in his second year of University to address the difficulty in finding student discounts in the city.
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-content">
                <div className="is-pulled-right">
                  <a href="https://www.linkedin.com/in/aaronlimai/" target="_blank" rel="noopener noreferrer">
                    <i className="linkedin fab fa-linkedin"></i>
                  </a>
                </div>
                <div className="media">
                    <div className="media-left">
                    <a href="http://www.limai.ca" target="_blank" rel="noopener noreferrer">
                      <figure className="avatar image is-64x64">
                        <img src="http://www.limai.ca/img/Me.png" alt="User" />
                      </figure>
                      </a>
                    </div>
                    <div className="media-content">
                      <p className="title is-5">Aaron Li-Mai</p>
                      <p className="subtitle is-5">@alima566</p>
                    </div>
                </div>
                <div className="content">
                  Aaron is a fourth year Computer Information Systems Student at <a href="http://www.mtroyal.ca/" target="_blank" rel="noopener noreferrer">Mount Royal University</a>. His interests and areas of concentration includes both software and web development, and big data.
                </div>
              </div>
            </div>
            <br></br>
            <div className="is-pulled-right field">
              <a className="button is-medium is-dark" rel="noopener noreferrer" target="_blank" href="https://github.com/renatoniro/comp4513-assignment2">
                <span className="icon">
                  <i className="fab fa-github"></i>
                </span>
                <span>View Project on GitHub</span>
              </a>
            </div>
            <br></br>
            <br></br>
            <h2 className="title">Frameworks & Packages Used</h2>
            <div className="tile is-ancestor">
              <div className="tile is-parent">
                <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
                  <article className="tile is-child is-link notification">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React Logo" />
                    <p className="title">React.js</p>
                    <p className="subtitle">Front-End UI Framework</p>
                  </article>
                </a>
              </div>
              <div className="tile is-parent">
                <a href="https://bulma.io" target="_blank" rel="noopener noreferrer">
                  <article className="tile is-child is-primary notification">
                    <img src="https://bulma.io/images/bulma-logo-white.png" alt="Bulma Logo" />
                    <p className="title">Bulma.io</p>
                    <p className="subtitle">CSS Framework</p>
                  </article>
                </a>
              </div>
              <div className="tile is-parent">
                <a href="https://www.npmjs.com/" target="_blank" rel="noopener noreferrer">
                  <article className="tile is-child is-danger notification">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/d/db/Npm-logo.svg" alt="NPM Logo" />
                    <p className="title">NPM</p>
                    <p className="subtitle">Javascript Package Manager</p>
                  </article>
                </a>
              </div>
              <div className="tile is-parent">
                <a href="https://sass-lang.com/" target="_blank" rel="noopener noreferrer">
                  <article className="tile is-child is-warning notification">
                    <img src="https://sass-lang.com/assets/img/logos/logo-b6e1ef6e.svg" alt="Sass Logo" />
                    <p className="title">Syntactically Awesome Style Sheets</p>
                    <p className="subtitle">CSS Preprocessor</p>
                  </article>
                </a>
              </div>
            </div>
            <hr></hr>
            <h2 className="title">Referenced Resources</h2>
              <div className="box content resource-list">
                <div>
                  <a href="https://github.com/caolan/async" target="_blank" rel="noopener noreferrer"><h4 className="subtitle is-4">caolan / async</h4></a>
                </div>
                <div>
                  <a href="https://github.com/Wolox/react-chat-widget" target="_blank" rel="noopener noreferrer"><h4 className="subtitle is-4">Wolox / react-chat-widget</h4></a>
                </div>
                <div>
                  <a href="https://socket.io/" target="_blank" rel="noopener noreferrer"><h4 className="subtitle is-4">Socket.io</h4></a>
                </div>
                <div>
                  <a href="http://recharts.org/" target="_blank" rel="noopener noreferrer"><h4 className="subtitle is-4">Recharts</h4></a>
                </div>
                <div>
                  <a href="https://github.com/blakeembrey/pluralize" target="_blank" rel="noopener noreferrer"><h4 className="subtitle is-4">blakeembrey / pluralize</h4></a>
                </div>
                <div>
                  <a href="https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/api/withRouter.md" target="_blank" rel="noopener noreferrer"><h4 className="subtitle is-4">React ▸ withRouter</h4></a>
                </div>
                <div>
                  <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort" target="_blank" rel="noopener noreferrer"><h4 className="subtitle is-4">Array.prototype.sort()</h4></a>
                </div>
                <div>
                  <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce" target="_blank" rel="noopener noreferrer"><h4 className="subtitle is-4">Array.prototype.reduce()</h4></a>
                </div>
                <div>
                  <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare" target="_blank" rel="noopener noreferrer"><h4 className="subtitle is-4">String.prototype.localeCompare()</h4></a>
                </div>
                <div>
                  <a href="https://css-tricks.com/scale-svg/" target="_blank" rel="noopener noreferrer"><h4 className="subtitle is-4">CSS Tricks ▸ How to Scale SVG</h4></a>
                </div>
                <div>
                  <a href="https://teamtreehouse.com/community/background-with-color-overlay-with-opacity-in-css" target="_blank" rel="noopener noreferrer"><h4 className="subtitle is-4">Background Color / Image Overlay</h4></a>
                </div>
                <div>
                  <a href="https://placeimg.com/" target="_blank" rel="noopener noreferrer"><h4 className="subtitle is-4">Placeholder Images</h4></a>
                </div>
                <div>
                  <a href="https://webgradients.com/" target="_blank" rel="noopener noreferrer"><h4 className="subtitle is-4">Web Gradients</h4></a>
                </div>
                <div>
                  <a href="https://logojoy.com/" target="_blank" rel="noopener noreferrer"><h4 className="subtitle is-4">Logojoy</h4></a>
                </div>
              </div>
        </section>
      </div>
    );
  }
}

export default AboutUs;
