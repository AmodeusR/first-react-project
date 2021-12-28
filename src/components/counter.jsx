import React, { Component } from 'react';

class Counter extends React.Component {

  render() {
    const {onIncrement, onDelete} = this.props;
    return (
      <div>
        <span className={this.getClasses()}>{this.formatCount()}</span>
        <input type="button" value="Incrementar" className="btn btn-secondary btn-sm" onClick={onIncrement} />
        <input type="button" value="Deletar" className="btn btn-danger m-2 btn-sm" onClick={onDelete} />
      </div>
    );
  }

  getClasses() {
    let classes = "badge m-2 p-2 badge-";
    classes+= this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}
 
export default Counter;