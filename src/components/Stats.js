import MainStats from "./MainStats";
import TimeSeries from "./TimeSeries";
import TVL from "./TVL";


const Stats = ({data}) => {
    return (
        <div>
            <MainStats data = {data}/>
            <TimeSeries data = {data}/>
            <TVL data = {data}/>
        </div>
    )
}

export default Stats;