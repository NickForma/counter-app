import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const { onReset, counters, onDelete, onIncrement, onAdd } = this.props;
    return (
      <React.Fragment>
        <div>
          <button onClick={onReset} className="btn btn-primary btn-sm m-2">
            Reset
          </button>
          {counters.map(counter => (
            <Counter
              key={counter.id}
              onDelete={onDelete}
              onIncrement={onIncrement}
              counter={counter}
            ></Counter>
          ))}
        </div>
        <div>
          <button onClick={onAdd} className="btn btn-success btn-sm m-2">Add Counter</button>
        </div>
      </React.Fragment>
    );
  }
}

export default Counters;
