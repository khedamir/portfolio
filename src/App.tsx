import React from 'react';
import Header from './components/Header';
import Tag from './components/Tag';
import Home from './pages/Home';
import './scss/app.scss';

function App() {
  return (
    <div className="App">
      <Tag tag='body'>
        <Header />
        <Home />
      </Tag>
    </div>
  );
}

export default App;
