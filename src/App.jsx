import React, { useState } from 'react';
import './App.css';

var App = () => {
  var [count, setCount] = useState(0);

  var increment = () => {
    setCount(count + 1);
  };

  var decrement = () => {
    setCount(count - 1);
  };
  

  return (
    <div className="container">
      <button className="button" onClick={increment}>+</button>
      <div className="count">{count}</div>
      <button className="button" onClick={decrement}>-</button>
    </div>
  );
};

export default App;
