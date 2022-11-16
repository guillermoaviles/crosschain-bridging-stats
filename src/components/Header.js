import icon from '../media/icon.png';
import {Link} from "react-router-dom";


const Header = ({setData}) => {

    const resetState = () => {
      setData({
        sourceChain: '',
        destinationChain: '',
        asset: '',
        fromTime: '',
        toTime: ''
      })
    }

    return (
      <nav>
        <Link to='/' onClick={resetState}>
          <img src={icon}/>
          <h1>Bridge Stats</h1>
        </Link>
        <Link to='/' onClick={resetState}>
          <h2>Home</h2>
        </Link>
      </nav>
    )
}

export default Header;