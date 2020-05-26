import React from 'react';
import Routes from './routes';

import  "./stylesGlobal.css";

import Header from './components/Header';
import Animation from './components/Animation';

const App = () => (
      <div className="App">
      <Header />
      <Animation />
      <Routes /> 
    </div>
  );

export default App;