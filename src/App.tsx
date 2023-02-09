import React from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import './scss/app.scss';

function App() {
  return (
    <div className="App">
      <span className='tag'>{'<body>'}</span>
      <Header />
      <div className='container'>
        <Home />
      </div>
      <span className='tag'>{'</body>'}</span>
    </div>
  );
}

export default App
