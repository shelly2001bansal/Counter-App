import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [count,setCount]=useState(0);
  function handleDecrease(){
    setCount(count-1);
  }
  
  function handleIncrease(){
    setCount(count+1);
  }
  function handleReset(){
    setCount(0);
  }

  return (
    <div className="container">
      <div className='heading'>Icrement & Decrement</div>
      <div className='btn'>
        <button className='btn-1' onClick={handleDecrease}>-</button>
        <div className='content'>{count}</div>
        <button className='btn-2' onClick={handleIncrease}>+</button>
      </div>
      <button className='btn-3' onClick={handleReset}>Reset</button>
    </div>
  );
}

export default App;
