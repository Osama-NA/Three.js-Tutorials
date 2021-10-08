import React from 'react';
import { Dice } from './components/Dice';
import { WobblyBoxes } from './components/WobblyBoxes';
import { ShadersScene } from './components/ShadersScene';
import './App.scss';

function App() {
  return (
    <>
      <Dice />
      <WobblyBoxes />
      <ShadersScene />
    </>
  );
}

export default App;