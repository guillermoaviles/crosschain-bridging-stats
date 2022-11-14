import MainStats from "./MainStats";
import TimeSeries from "./TimeSeries";
import TVL from "./TVL";


const Stats = ({params}) => {
    return (
        <div>
            <MainStats/>
            <TimeSeries/>
            <TVL/>
        </div>
    )
}

export default Stats;