import React, { Component } from 'react';
import Counter from "./counter";

class Counters extends React.Component {
  state = {
    counters: [
      {id: 1, value: 4},
      {id: 2, value: 0},
      {id: 3, value: 0},
      {id: 4, value: 0},
    ]
  }

  handleIncrement = id => {
    const counters = this.state.counters.map(counter => {
      if (counter.id === id) {
        counter.value += 1;
        return counter;
      } else {
        return counter;
      }
    }, []);
    this.setState({counters});
  }
  
  handleDelete = (id) => {
    const counters = this.state.counters.filter(counter => counter.id !== id);
    this.setState({counters});
  }

  handleReset = () => {
    const counters = this.state.counters.map(counter => {
      counter.value = 0
      return counter;
    });
    
    this.setState({counters});
  }

  render() {
    return (
      <div>
        <input className="btn btn-danger m-2" type="button" value="Reset" onClick={this.handleReset} />

        {this.state.counters.map(counter => (
          <Counter key={counter.id} counter={counter} onDelete={() => this.handleDelete(counter.id)} onIncrement={() => this.handleIncrement(counter.id)} />
        ))}
      </div>  
    );
  }
}
 
export default Counters;