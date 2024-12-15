import React, { Component } from 'react';

interface CounterState {
  count: number;
}

//type pour les props
interface CounterProps {}

class Counter extends Component<CounterProps, CounterState> {
  // Initialiser l'état  de 0
  state: CounterState = {
    count: 0
  };

  // incrémentation
  increment = (): void => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>Compte : {this.state.count}</p>
        <button onClick={this.increment}>Incrémenter</button>
      </div>
    );
  }
}

export default Counter;
