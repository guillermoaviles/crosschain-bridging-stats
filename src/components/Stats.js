import MainStats from "./MainStats";
import TimeSeries from "./TimeSeries";
import CumulativeVolume from "./CumulativeVolume.js";


const Stats = ({data}) => {
    return (
        <div>
            <MainStats data = {data}/>
            <TimeSeries data = {data}/>
            <CumulativeVolume data = {data}/>
        </div>
    )
}

export default Stats;