import React from 'react';
import Header from './Header';

import Welcome from './Welcome';
import './App.css';
import Detail from './Detail';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Welcome/>
      <Detail/>
      <Footer/>
    </div>
  );
}

export default App;
