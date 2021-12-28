import React, { Component } from 'react';

class Navbar extends React.Component {
  render() { 
    return (
      <nav className="navbar navbar-light bg-dark mb-4">
        <div className="container-fluid">
          <h2 className="navbar-brand text-white">Qtd. de items únicos &nbsp;
          <span className="badge badge-pill badge-secondary align-left">{this.props.totalCounters}</span>
          </h2>
        </div>
      </nav>
    );
  }
}
 
export default Navbar;