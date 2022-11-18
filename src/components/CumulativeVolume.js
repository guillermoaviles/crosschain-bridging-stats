import { useState } from "react";
import { useEffect } from 'react';
import axios from 'axios';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from "recharts";


const CumulativeVolume = ({data}) => {

    const [stats, setStats] = useState({});

    useEffect(() => {
        if (data.sourceChain && data.destinationChain) {
        axios.get(`https://api.axelarscan.io/cross-chain/cumulative-volume?sourceChain=${data.sourceChain}&destinationChain=${data.destinationChain}&asset=${data.asset}&fromTime=${data.fromTime}&toTime=${data.toTime}`)
          .then((response) => response.data)
          .then((response) => {
            response.data.forEach(element => {
                element.timestamp = new Date(element.timestamp).toLocaleDateString()              
            });
            setStats(response) 
          })
        }
    }, []);
    

    return (
        <div>
            <h2>Cumulative Volume</h2>
            <LineChart
                width={500}
                height={300}
                data={stats.data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5
                }}
            >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="timestamp" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
                type="monotone"
                dataKey="time"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="volume" stroke="#82ca9d" />
            </LineChart>
        </div>
    )
}

export default CumulativeVolume;