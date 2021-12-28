import React, { Component } from 'react';
import Counter from "./counter";

class Counters extends React.Component {
  render() {
    const {counters, onIncrement, onDelete, onReset} = this.props; 
    return (
      <div>
        <input className="btn btn-danger m-2" type="button" value="Reset" onClick={onReset} />
        {counters.map(counter => (
          <Counter
            key={counter.id}
            counter={counter}
            onIncrement={() => onIncrement(counter.id)}
            onDelete={() => onDelete(counter.id)}
          />
        ))}
      </div>
    );
  }
}
 
export default Counters;