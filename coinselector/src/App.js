import {useState} from 'react'
import './App.css';
import Dollar from './Dollar';
const COINS = [
  { name: 'Dollar', value: 100 },
  { name: 'Half Dollar', value: 50 },
  { name: 'Quarter', value: 25 },
  { name: 'Dime', value: 10 },
  { name: 'Nickel', value: 5 },
  { name: 'Penny', value: 1 },
];
function App() {
  
  return (
    <div style={{ padding: '2rem' }}>
      <h2 style={{textAlign:'center'}}>Coin Checker</h2>
      <Dollar/>
    </div>
  );
}

export default App;
