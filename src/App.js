import React from 'react';
import { Dice } from './components/Dice';
import { WobblyBoxes } from './components/WobblyBoxes';
import './App.scss';

function App() {
  return (
    <>
      <Dice />
      <WobblyBoxes />
    </>
  );
}

export default App;