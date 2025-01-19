import './App.css';

import React, { useState, useEffect } from 'react';
import Game from './components/Game.js';
import StartScreen from "./components/StartScreen";


// function App() {
//   const [message, setMessage] = useState('');
//
//   useEffect(() => {
//     fetch('/api')
//         .then(res => res.text())
//         .then(data => setMessage(data));
//   }, []);
//
//     return (
//       <div className="App">
//           {/*<StartScreen/>*/}
//           {/*<Game />*/}
//       </div>
//   );
// }

interface Props {
    name: string;
}

const App: React.FC<Props> = ({ name }) => {
    return <div>Hello, {name}!</div>;
};

export default App;