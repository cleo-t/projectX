import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/api')
        .then(res => res.text())
        .then(data => setMessage(data));
  }, []);

  return (
      <div>
        <h1>hello</h1>
      </div>
  );
}

export default App;