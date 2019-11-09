import React from 'react';
import style from './App.module.css';
import NavBar from './components/NavBar';
import Content from './components/Content';

function App() {
  return (
    <div className={style.App}>
      <NavBar />
      <Content />
    </div>
  );
}

export default App;
