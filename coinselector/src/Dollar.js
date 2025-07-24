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
  const [selectedCoins, setSelectedCoins] = useState([]);

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
  const handleCostChange = (e) => {
    const inputValue = parseFloat(e.target.value);

    setAmount(inputValue);

    let remaining = inputValue*100;
    const selected = [];

    for (let coin of COINS) {
      if (remaining >= coin.value) {
        selected.push(coin.name);
        remaining =remaining%coin.value;
      }
    }

    setSelectedCoins(selected);
    console.log(selectedCoins);
  };
  
  const isChecked = (coinName) => selectedCoins.includes(coinName);
  return (
    <div style={{color:'white',maxWidth: '400px', margin: '2rem auto', padding: '1rem', backgroundColor:'black' }}>
      <h2>🪙 Coin Breakdown</h2>

      <input
        type="number"
        step="0.01"
        placeholder="Enter amount (e.g. 1.37)"
        value={amount}
        onChange={ handleCostChange}
        style={{ width: '90%', padding: '0.5rem' }}
      />
    <ul style={{ listStyle: 'none', paddingTop: '1rem' }}>
        {COINS.map((coin) => (
          <li key={coin.name}>
            <label>
              <input
                type="checkbox"
                checked={isChecked(coin.name)}
                readOnly
              />
              {coin.name} ({coin.value}¢)
            </label>
          </li>
        ))}
      </ul>
      <button onClick={calculateCoins} style={{ marginTop: '1rem', backgroundColor:'Highlight'}}>
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
