import { useState } from "react";


const Home = () => {

    const [params, setParams] = useState({
        sourceChain: '',
        destinationChain: '',
        asset: '',
        fromTime: '',
        toTime: ''
    });

    const handleSourceChain = (event) => {
        setParams({
            sourceChain: event.target.getAttribute('value')
        })
    }

    const handleDestinationChain = (event) => {
        setParams({
            destinationChain: event.target.getAttribute('value')
        })
    }

    const handleAsset = (event) => {
        setParams({
            asset: event.target.getAttribute('value')
        })
    }

    const handleFromTime = (event) => {
        setParams({
            fromTime: event.target.value
        })
    }

    const handletoTime = (event) => {
        setParams({
            toTime: event.target.value
        })
    }

    const handleSearch = (event) => {
        setParams({
            toTime: event.target.value
        })
    }
    
    console.log(params);
    // console.log(params.destinationChain);
    // console.log(params.asset);


    return (
        <div>
            <p>Home</p>
            <div>
                <div className='source-chain' onClick={handleSourceChain}>
                    <p>Source Chain</p>
                    <div value='ethereum'>Ethereum</div>
                    <div value='polygon'>Polygon</div>
                    <div value='binance'>BNB Chain</div>
                    <div value='avalanche'>Avalanche</div>
                    <div value='fantom'>Fantom</div>
                    <div value='moonbeam'>Moonbeam</div>
                    <div value='aurora'>Aurora</div>
                    <div value='arbitrum'>Arbitrum</div>
                    <div value='optimism'>Optimism</div>
                    <div value='cosmoshub'>Cosmos</div>
                    <div value='osmosis'>Osmosis</div>
                </div>
                <div className='destination-chain' onClick={handleDestinationChain}>
                    <p>Destination Chain</p>
                    <div value='ethereum'>Ethereum</div>
                    <div value='polygon'>Polygon</div>
                    <div value='binance'>BNB Chain</div>
                    <div value='avalanche'>Avalanche</div>
                    <div value='fantom'>Fantom</div>
                    <div value='moonbeam'>Moonbeam</div>
                    <div value='aurora'>Aurora</div>
                    <div value='arbitrum'>Arbitrum</div>
                    <div value='optimism'>Optimism</div>
                    <div value='cosmoshub'>Cosmos</div>
                    <div value='osmosis'>Osmosis</div>
                </div>
                <div className='asset' onClick={handleAsset}>
                    <p>Asset</p>
                    <div value='uusdc'>USDC</div>
                    <div value='uusdt'>USDT</div>
                    <div value='dai-wei'>DAI</div>
                    <div value='weth-wei'>ETH</div>
                    <div value='steth-wei'>stETH</div>
                    <div value='wbtc-satoshi'>WBTC</div>
                    <div value='wbnb-wei'>BNB</div>
                    <div value='wmatic-wei'>MATIC</div>
                    <div value='wftm-wei'>FTM</div>
                    <div value='uatom'>ATOM</div>
                    <div value='wglmr-wei'>GLMR</div>
                    <div value='link-wei'>LINK</div>
                    <div value='aave-wei'>AAVE</div>
                    <div value='ape-wei'>APE</div>
                    <div value='uni-wei'>UNI</div>
                </div>
                <div>
                    <label>From Date:</label>
                    <input className='input' onChange={handleFromTime}/>
                </div>
                <div>
                    <label>To Date:</label>
                    <input className='input' onChange={handletoTime}/>
                </div>
                <div>
                    <button onClick={handleSearch}>Search</button>
                </div>
            </div>
        </div>
    )
}

export default Home;