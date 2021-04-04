import React, { useState } from 'react';
import Header from './components/Header'
import Display from './components/Display'
import './App.scss'


const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Display/>
    </React.Fragment>
  
  );
}

export default App
