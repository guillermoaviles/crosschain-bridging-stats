import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from './components/Home';
import Header from './components/Header';
import Stats from './components/Stats';


const App = () => {

  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/stats' element={<Stats/>}/>
      </Routes>
    </div>
  );
};

export default App;
