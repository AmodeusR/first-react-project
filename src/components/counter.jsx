import React, { Component } from 'react';

class Counter extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"]
  };

  render() {
    return (
      <React.Fragment>
        <span className={this.getClasses()}>{this.formatCount()}</span>
        <input type="button" value="Incrementar" className="btn btn-secondary btn-sm" />
        <ul>{this.getTags()}</ul>
      </React.Fragment>
    );
  }

  getTags() {
    const { tags } = this.state;
    return tags.map(tag => <li key={tag}>{tag}</li>);
  }

  getClasses() {
    let classes = "badge m-2 p-2 badge-";
    classes+= this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}
 
export default Counter;