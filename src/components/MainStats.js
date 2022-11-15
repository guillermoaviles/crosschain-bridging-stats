import { useState } from "react";
import { useEffect } from 'react';
import axios from 'axios';
// import { useParams } from 'react-router-dom';


const MainStats = ({data}) => {

    const [stats, setStats] = useState({});
    // const {params} = useParams();
    useEffect(() => {
        console.log(data);
        if (data.sourceChain && data.destinationChain) {
        axios.get(`https://api.axelarscan.io/cross-chain/transfers-stats?sourceChain=${data.sourceChain}&destinationChain=${data.destinationChain}&asset=uusdc&fromTime=1646240400&toTime=1659459600`)
          .then((response) => response.data)
          .then((response) => {
            setStats(response) 
          })
        }
    }, []);
    
    console.log(stats);

    return (
        <div>
            <p>Main Stats</p>
            <div className='num-txs'>Number of Transfers: {Object.keys(stats).length ? stats.data[0].num_txs : ''}</div>
            <div className='volume'>Volume: ${Object.keys(stats).length ? stats.data[0].volume : ''} USD</div>
        </div>
    )
}

export default MainStats;