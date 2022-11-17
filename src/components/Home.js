import { Link } from "react-router-dom";


const Home = ({data, setData}) => {
    

    const handleSourceChain = (event) => {
        
        // if (data.sourceChain !== event.target.getAttribute('value')) {

        // }
        // event.target.style.color = '#191c1e';
        // event.target.style.backgroundColor = '#0abab5';
        setData({...data,
            sourceChain: event.target.getAttribute('value')
        })
    }

    const handleDestinationChain = (event) => {
        setData({...data,
            destinationChain: event.target.getAttribute('value')
        })
    }

    const handleAsset = (event) => {
        setData({...data,
            asset: event.target.getAttribute('value')
        })
    }

    const handleFromTime = (event) => {
        setData({...data,
            fromTime: event.target.value
        })
    }

    const handletoTime = (event) => {
        setData({...data,
            toTime: event.target.value
        })
    }

    
    console.log(data);


    return (
        <div className='home'>
            <div className='parameter-select-box'>
                <div className='boxes' onClick={handleSourceChain}>
                    <p>Source Chain</p>
                    {data.sourceChain === 'ethereum' ? <div style = {{color: '#191c1e', backgroundColor: '#0abab5'}} className='chain' value='ethereum'>Ethereum</div> : <div className='chain' value='ethereum'>Ethereum</div>}
                    {data.sourceChain === 'polygon' ? <div style = {{color: '#191c1e', backgroundColor: '#0abab5'}} className='chain' value='polygon'>Polygon</div> : <div className='chain' value='polygon'>Polygon</div>}
                    {data.sourceChain === 'binance' ? <div style = {{color: '#191c1e', backgroundColor: '#0abab5'}} className='chain' value='binance'>BNB Chain</div> : <div className='chain' value='binance'>BNB Chain</div>}
                    {data.sourceChain === 'avalanche' ? <div style = {{color: '#191c1e', backgroundColor: '#0abab5'}} className='chain' value='avalanche'>Avalanche</div> : <div className='chain' value='avalanche'>Avalanche</div>}
                    {data.sourceChain === 'fantom' ? <div style = {{color: '#191c1e', backgroundColor: '#0abab5'}} className='chain' value='fantom'>Fantom</div> : <div className='chain' value='fantom'>Fantom</div>}
                    {data.sourceChain === 'moonbeam' ? <div style = {{color: '#191c1e', backgroundColor: '#0abab5'}} className='chain' value='moonbeam'>Moonbeam</div> : <div className='chain' value='moonbeam'>Moonbeam</div>}
                    {data.sourceChain === 'aurora' ? <div style = {{color: '#191c1e', backgroundColor: '#0abab5'}} className='chain' value='aurora'>Aurora</div> : <div className='chain' value='aurora'>Aurora</div>}
                    {data.sourceChain === 'arbitrum' ? <div style = {{color: '#191c1e', backgroundColor: '#0abab5'}} className='chain' value='arbitrum'>Arbitrum</div> : <div className='chain' value='arbitrum'>Arbitrum</div>}
                    {data.sourceChain === 'optimism' ? <div style = {{color: '#191c1e', backgroundColor: '#0abab5'}} className='chain' value='optimism'>Optimism</div> : <div className='chain' value='optimism'>Optimism</div>}
                    {data.sourceChain === 'cosmoshub' ? <div style = {{color: '#191c1e', backgroundColor: '#0abab5'}} className='chain' value='cosmoshub'>Cosmos</div> : <div className='chain' value='cosmoshub'>Cosmos</div>}
                    {data.sourceChain === 'osmosis' ? <div style = {{color: '#191c1e', backgroundColor: '#0abab5'}} className='chain' value='osmosis'>Osmosis</div> : <div className='chain' value='osmosis'>Osmosis</div>}
                </div>
                <div className='boxes' onClick={handleDestinationChain}>
                    <p>Destination Chain</p>
                    {data.destinationChain === 'ethereum' ? <div style = {{color: '#191c1e', backgroundColor: '#0abab5'}} className='chain' value='ethereum'>Ethereum</div> : <div className='chain' value='ethereum'>Ethereum</div>}
                    {data.destinationChain === 'polygon' ? <div style = {{color: '#191c1e', backgroundColor: '#0abab5'}} className='chain' value='polygon'>Polygon</div> : <div className='chain' value='polygon'>Polygon</div>}
                    {data.destinationChain === 'binance' ? <div style = {{color: '#191c1e', backgroundColor: '#0abab5'}} className='chain' value='binance'>BNB Chain</div> : <div className='chain' value='binance'>BNB Chain</div>}
                    {data.destinationChain === 'avalanche' ? <div style = {{color: '#191c1e', backgroundColor: '#0abab5'}} className='chain' value='avalanche'>Avalanche</div> : <div className='chain' value='avalanche'>Avalanche</div>}
                    {data.destinationChain === 'fantom' ? <div style = {{color: '#191c1e', backgroundColor: '#0abab5'}} className='chain' value='fantom'>Fantom</div> : <div className='chain' value='fantom'>Fantom</div>}
                    {data.destinationChain === 'moonbeam' ? <div style = {{color: '#191c1e', backgroundColor: '#0abab5'}} className='chain' value='moonbeam'>Moonbeam</div> : <div className='chain' value='moonbeam'>Moonbeam</div>}
                    {data.destinationChain === 'aurora' ? <div style = {{color: '#191c1e', backgroundColor: '#0abab5'}} className='chain' value='aurora'>Aurora</div> : <div className='chain' value='aurora'>Aurora</div>}
                    {data.destinationChain === 'arbitrum' ? <div style = {{color: '#191c1e', backgroundColor: '#0abab5'}} className='chain' value='arbitrum'>Arbitrum</div> : <div className='chain' value='arbitrum'>Arbitrum</div>}
                    {data.destinationChain === 'optimism' ? <div style = {{color: '#191c1e', backgroundColor: '#0abab5'}} className='chain' value='optimism'>Optimism</div> : <div className='chain' value='optimism'>Optimism</div>}
                    {data.destinationChain === 'cosmoshub' ? <div style = {{color: '#191c1e', backgroundColor: '#0abab5'}} className='chain' value='cosmoshub'>Cosmos</div> : <div className='chain' value='cosmoshub'>Cosmos</div>}
                    {data.destinationChain === 'osmosis' ? <div style = {{color: '#191c1e', backgroundColor: '#0abab5'}} className='chain' value='osmosis'>Osmosis</div> : <div className='chain' value='osmosis'>Osmosis</div>}
                </div>
                <div className='boxes' onClick={handleAsset}>
                    <p>Asset</p>
                    {data.asset === 'uusdc' ? <div style = {{color: '#191c1e', backgroundColor: '#0abab5'}} className='asset' value='uusdc'>USDC</div> : <div className='asset' value='uusdc'>USDC</div>}
                    {data.asset === 'uusdt' ? <div style = {{color: '#191c1e', backgroundColor: '#0abab5'}} className='asset' value='uusdt'>USDT</div> : <div className='asset' value='uusdt'>USDT</div>}
                    {data.asset === 'dai-wei' ? <div style = {{color: '#191c1e', backgroundColor: '#0abab5'}} className='asset' value='dai-wei'>DAI</div> : <div className='asset' value='dai-wei'>DAI</div>}
                    {data.asset === 'weth-wei' ? <div style = {{color: '#191c1e', backgroundColor: '#0abab5'}} className='asset' value='weth-wei'>ETH</div> : <div className='asset' value='weth-wei'>ETH</div>}
                    {data.asset === 'steth-wei' ? <div style = {{color: '#191c1e', backgroundColor: '#0abab5'}} className='asset' value='steth-wei'>stETH</div> : <div className='asset' value='steth-wei'>stETH</div>}
                    {data.asset === 'wbtc-satoshi' ? <div style = {{color: '#191c1e', backgroundColor: '#0abab5'}} className='asset' value='wbtc-satoshi'>WBTC</div> : <div className='asset' value='wbtc-satoshi'>WBTC</div>}
                    {data.asset === 'wbnb-wei' ? <div style = {{color: '#191c1e', backgroundColor: '#0abab5'}} className='asset' value='wbnb-wei'>BNB</div> : <div className='asset' value='wbnb-wei'>BNB</div>}
                    {data.asset === 'wmatic-wei' ? <div style = {{color: '#191c1e', backgroundColor: '#0abab5'}} className='asset' value='wmatic-wei'>MATIC</div> : <div className='asset' value='wmatic-wei'>MATIC</div>}
                    {data.asset === 'wftm-wei' ? <div style = {{color: '#191c1e', backgroundColor: '#0abab5'}} className='asset' value='wftm-wei'>FTM</div> : <div className='asset' value='wftm-wei'>FTM</div>}
                    {data.asset === 'uatom' ? <div style = {{color: '#191c1e', backgroundColor: '#0abab5'}} className='asset' value='uatom'>ATOM</div> : <div className='asset' value='uatom'>ATOM</div>}
                    {data.asset === 'wglmr-wei' ? <div style = {{color: '#191c1e', backgroundColor: '#0abab5'}} className='asset' value='wglmr-wei'>GLMR</div> : <div className='asset' value='wglmr-wei'>GLMR</div>}
                    {data.asset === 'link-wei' ? <div style = {{color: '#191c1e', backgroundColor: '#0abab5'}} className='asset' value='link-wei'>LINK</div> : <div className='asset' value='link-wei'>LINK</div>}
                    {data.asset === 'aave-wei' ? <div style = {{color: '#191c1e', backgroundColor: '#0abab5'}} className='asset' value='aave-wei'>AAVE</div> : <div className='asset' value='aave-wei'>AAVE</div>}
                    {data.asset === 'ape-wei' ? <div style = {{color: '#191c1e', backgroundColor: '#0abab5'}} className='asset' value='ape-wei'>APE</div> : <div className='asset' value='ape-wei'>APE</div>}
                    {data.asset === 'uni-wei' ? <div style = {{color: '#191c1e', backgroundColor: '#0abab5'}} className='asset' value='uni-wei'>UNI</div> : <div className='asset' value='uni-wei'>UNI</div>}
                </div>
            </div>
            <div className='dates-box'>
                <div className='input'>
                    <label className='label'>From:</label>
                    <input className='input-box' placeholder="mm/dd/yyyy" onChange={handleFromTime}/>
                </div>
                <div className='input'>
                    <label className='label'>To:</label>
                    <input className='input-box' placeholder="mm/dd/yyyy" onChange={handletoTime}/>
                </div>
            </div>
            <Link to = '/stats'>
                <h1 className='stats-button'>Get Stats</h1>
            </Link>
        </div>
    )
}

export default Home;