import React from 'react';
import Header from './Header';

import Welcome from './Welcome';
import './App.css';
import Detail from './Detail';

function App() {
  return (
    <div className="App">
      <Header />
      <Welcome/>
      <Detail/>
    </div>
  );
}

export default App;
