import { Link } from "react-router-dom";


const Home = ({data, setData}) => {
    

    const handleSourceChain = (event) => {
        // event.target.setAttribute({
        //     'color': '#191c1e',
        //     'background-color': '#0abab5'})
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
                    <div className='chain' value='ethereum'>Ethereum</div>
                    <div className='chain' value='polygon'>Polygon</div>
                    <div className='chain' value='binance'>BNB Chain</div>
                    <div className='chain' value='avalanche'>Avalanche</div>
                    <div className='chain' value='fantom'>Fantom</div>
                    <div className='chain' value='moonbeam'>Moonbeam</div>
                    <div className='chain' value='aurora'>Aurora</div>
                    <div className='chain' value='arbitrum'>Arbitrum</div>
                    <div className='chain' value='optimism'>Optimism</div>
                    <div className='chain' value='cosmoshub'>Cosmos</div>
                    <div className='chain' value='osmosis'>Osmosis</div>
                </div>
                <div className='boxes' onClick={handleDestinationChain}>
                    <p>Destination Chain</p>
                    <div className='chain' value='ethereum'>Ethereum</div>
                    <div className='chain' value='polygon'>Polygon</div>
                    <div className='chain' value='binance'>BNB Chain</div>
                    <div className='chain' value='avalanche'>Avalanche</div>
                    <div className='chain' value='fantom'>Fantom</div>
                    <div className='chain' value='moonbeam'>Moonbeam</div>
                    <div className='chain' value='aurora'>Aurora</div>
                    <div className='chain' value='arbitrum'>Arbitrum</div>
                    <div className='chain' value='optimism'>Optimism</div>
                    <div className='chain' value='cosmoshub'>Cosmos</div>
                    <div className='chain' value='osmosis'>Osmosis</div>
                </div>
                <div className='boxes' onClick={handleAsset}>
                    <p>Asset</p>
                    <div className='asset' value='uusdc'>USDC</div>
                    <div className='asset' value='uusdt'>USDT</div>
                    <div className='asset' value='dai-wei'>DAI</div>
                    <div className='asset' value='weth-wei'>ETH</div>
                    <div className='asset' value='steth-wei'>stETH</div>
                    <div className='asset' value='wbtc-satoshi'>WBTC</div>
                    <div className='asset' value='wbnb-wei'>BNB</div>
                    <div className='asset' value='wmatic-wei'>MATIC</div>
                    <div className='asset' value='wftm-wei'>FTM</div>
                    <div className='asset' value='uatom'>ATOM</div>
                    <div className='asset' value='wglmr-wei'>GLMR</div>
                    <div className='asset' value='link-wei'>LINK</div>
                    <div className='asset' value='aave-wei'>AAVE</div>
                    <div className='asset' value='ape-wei'>APE</div>
                    <div className='asset' value='uni-wei'>UNI</div>
                </div>
            </div>
            <div className='dates-box'>
                <div className='input'>
                    <label className='label'>From:</label>
                    <input className='input-box' placeholder="Unix-timecode" onChange={handleFromTime}/>
                </div>
                <div className='input'>
                    <label className='label'>To:</label>
                    <input className='input-box' placeholder="Unix-timecode" onChange={handletoTime}/>
                </div>
            </div>
            <Link to = '/stats'>
                <h1 className='stats-button'>Get Stats</h1>
            </Link>
        </div>
    )
}

export default Home;