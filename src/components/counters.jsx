import React, { Component } from 'react';
import Counter from "./counter";

class Counters extends React.Component {
  render() {
    return null
    //   <div>
    //     <input className="btn btn-danger m-2" type="button" value="Reset" onClick={this.props.onReset} />
    //     {this.props.counters.map(counter => (
    //       <Counter
    //         key={counter.id}
    //         counter={counter}
    //         onIncrement={() => this.props.onIncrement(counter.id)}
    //         onDelete={() => this.props.onDelete(counter.id)}
    //       />
    //     ))}
    //   </div>  
    // );
  }
}
 
export default Counters;