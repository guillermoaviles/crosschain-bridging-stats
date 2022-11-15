import { useState } from "react";
import { useEffect } from 'react';
import axios from 'axios';


const TVL = ({params}) => {

    const [stats, setStats] = useState('');

    useEffect(() => {
        axios.get('https://api.axelarscan.io/cross-chain/transfers-stats', {params})
          .then((response) => response.data)
          .then((response) => {
            setStats(response) 
          })
    }, []);
    
    return (
        <div>
            <p>Total Value Locked</p>
            <div className='num-txs'>Number of Transfers: {stats.num_txs}</div>
            <div className='volume'>Volume: ${stats.volume} USD</div>
        </div>
    )
}

export default TVL;