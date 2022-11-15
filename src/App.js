import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from './components/Home';
import Header from './components/Header';
import Stats from './components/Stats';
import { useState } from "react";


const App = () => {

  const [data, setData] = useState({
    sourceChain: '',
    destinationChain: '',
    asset: '',
    fromTime: '',
    toTime: ''
});

  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home data = {data} setData = {setData}/>}/>
        <Route path='/stats' element={<Stats data = {data}/>}/>
      </Routes>
    </div>
  );
};

export default App;
