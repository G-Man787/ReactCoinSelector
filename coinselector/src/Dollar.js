import React, { useState } from 'react';

const COINS = [
  { name: 'Dollar', value: 100 },
  { name: 'Half Dollar', value: 50 },
  { name: 'Quarter', value: 25 },
  { name: 'Dime', value: 10 },
  { name: 'Nickel', value: 5 },
  { name: 'Penny', value: 1 },
];

function Dollar() {
  const [amount, setAmount] = useState('');
  const [breakdown, setBreakdown] = useState([]);

  const calculateCoins = () => {
    let cents = Math.round(parseFloat(amount) * 100); // convert to cents
    const result = [];

    for (const coin of COINS) {
      const count = Math.floor(cents / coin.value);
      if (count > 0) {
        result.push({ name: coin.name, count });
        cents %= coin.value;
      }
    }
    setBreakdown(result);
  };

  return (
    <div style={{ color:'white',maxWidth: '500px', margin: '2rem auto', padding: '1rem' ,backgroundColor:'black'}}>
      <h2>🪙 Coin Breakdown</h2>

      <input
        type="number"
        step="0.01"
        placeholder="Enter amount (e.g. 1.37)"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        style={{ width: '90%', padding: '0.5rem' }}
      />

      <button onClick={calculateCoins} style={{ marginTop: '1rem', backgroundColor:'lightskyblue'}}>
        Calculate
      </button>

      {breakdown.length > 0 && (
        <ul style={{ marginTop: '1rem' }}>
          {breakdown.map((coin, index) => (
            <li key={index}>
              {coin.count} × {coin.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Dollar;
