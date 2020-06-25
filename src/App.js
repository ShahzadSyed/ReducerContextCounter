import React, { useState } from 'react';
import Parent from './Parent.js'
import './App.css';
import counterContext from './CounterContext.js';

function App() {
  // let [count, setCount] = useState(25)
  let countState = useState(0)
  return (
    <counterContext.Provider value={countState}>
        <div>
          <Parent />          
        </div>
    </counterContext.Provider>      
  );
}

export default App;
