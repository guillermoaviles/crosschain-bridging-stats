import { useState } from "react";
import { useEffect } from 'react';
import axios from 'axios';



const MainStats = ({data}) => {

    const [stats, setStats] = useState({});

    useEffect(() => {
        console.log(data);
        if (data.sourceChain && data.destinationChain) {
        axios.get(`https://api.axelarscan.io/cross-chain/transfers-stats?sourceChain=${data.sourceChain}&destinationChain=${data.destinationChain}&asset=${data.asset}&fromTime=${data.fromTime}&toTime=${data.toTime}`)
          .then((response) => response.data)
          .then((response) => {
            setStats(response) 
          })
        }
    }, []);
    
    console.log(stats);

    return (
        <div>
            <h2>Main Stats</h2>
            <div className='main-stats-box'>
                <div className='num-txs'>Number of Transfers: {Object.keys(stats).length ? stats.data[0].num_txs : ''}</div>
                <div className='volume'>Volume: ${Object.keys(stats).length ? stats.data[0].volume : ''} USD</div>
            </div>
        </div>
    )
}

export default MainStats;