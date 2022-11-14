import React, { useState } from 'react';
import { useEffect } from 'react';
import axios from "axios";
import Home from './components/Home';
import Header from './components/Header';
// import { useParams } from "react-router-dom";


// const App = ({params}) => {
const App = () => {

  const [stats, setStats] = useState([]);
  const params = {
    'sourceChain': 'osmosis',
    'destinationChain': 'polygon',
    'asset': 'uusdc',
    'fromTime': '1646240400',
    'toTime': '1659459600'
  }

  useEffect(() => {
    axios.get('https://api.axelarscan.io/cross-chain/transfers-stats', {params})
      .then((response) => response.data)
      .then((response) => {
        setStats(response) 
      })

  }, []);

  console.log(stats);

  return (
    <div className="App">
      <Header/>
      <Home/>
    </div>
  );
};

export default App;
