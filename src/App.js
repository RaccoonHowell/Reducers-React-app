import React from 'react';
import './App.css';
import Clicked from './Clicked';
import Square from './Square';
import Counter from './Counter';

const App = () => (
  <>
    <Clicked />
    <Square colour="hotpink" />
    <Counter initial={ 50 } max={ 100 } />
  </>
);

export default App;