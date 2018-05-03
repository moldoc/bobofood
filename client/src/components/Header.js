import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <nav class="green accent-4">
        <div class="nav-wrapper">
          <a class="brand-logo center">Nommotime</a>
          <ul id="nav-mobile" class="left hide-on-med-and-down">
            <li><a>Log in with Google</a></li>
          </ul>
        </div>
      </nav>
    );
  }
}
