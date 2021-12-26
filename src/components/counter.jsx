import React, { Component } from 'react';

class Counter extends Component {
  state = {
    value: this.props.counter.value
  };

  handleIncrement = () => {
    this.setState({ value: this.state.value + 1})
  }


  render() {
    return (
      <div>
        <span className={this.getClasses()}>{this.formatCount()}</span>
        <input type="button" value="Incrementar" className="btn btn-secondary btn-sm" onClick={this.handleIncrement} />
        <input type="button" value="Deletar" className="btn btn-danger m-2 btn-sm" onClick={this.props.onDelete} />
      </div>
    );
  }

  getTags() {
    const { tags } = this.state;
    return tags.map(tag => <li key={tag}>{tag}</li>);
  }

  getClasses() {
    let classes = "badge m-2 p-2 badge-";
    classes+= this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}
 
export default Counter;