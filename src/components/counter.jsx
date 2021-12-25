import React, { Component } from 'react';

class Counter extends React.Component {
  state = {
    count: 0,
  };

  render() {
    return (
      <React.Fragment>
        <span className="badge badge-primary m-2 p-2">{this.formatCount()}</span>
        <input type="button" value="Incrementar" className="btn btn-secondary btn-sm" />
      </React.Fragment>
    );
  }

  formatCount () {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}
 
export default Counter;