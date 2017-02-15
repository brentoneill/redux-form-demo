import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div>
          {/* My Blog App */}
          {this.props.children}
      </div>
    );
  }
}
