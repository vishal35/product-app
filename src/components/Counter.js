import React from "react";

export function Counter({ counter, increment, decrement, reset }) {
  return (
    <div>
      <div>I am Counter {counter}</div>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
