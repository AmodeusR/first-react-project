import React, { Component } from "react";
import Navbar from "./components/navbar";
import Counters from "./components/counters";

class App extends React.Component {
  
  // State só é diferente de nulo quando declarado assim, apesar de que no outro componente não foi necessário tal método
  constructor(props) {
    super(props)
    this.state ={
      counters: [
        {id: 1, value: 4},
        {id: 2, value: 0},
        {id: 3, value: 0},
        {id: 4, value: 0},
      ]
    }
  }

  // state: {
  //   counters: [
  //     {id: 1, value: 4},
  //     {id: 2, value: 0},
  //     {id: 3, value: 0},
  //     {id: 4, value: 0},
  //   ]
  // }

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
    const {counters} = this.state;
      return (
        <React.Fragment>
          <Navbar totalCounters={counters.filter(c => c.value > 0).length}/>
          <main className="container">
            <Counters
              onIncrement={this.handleIncrement}
              onDelete={this.handleDelete}
              onReset={this.handleReset}
              counters={counters}
            />
          </main>
        </React.Fragment>
    );
  }
}

export default App;
