import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <nav className="green accent-4">
        <div className="nav-wrapper">
          <a className="brand-logo center">Nommotime</a>
          <ul id="nav-mobile" className="left hide-on-med-and-down">
            <li>
              <a>Login With Google</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
