import icon from '../media/icon.png'
import {Link} from "react-router-dom";


const Header = () => {
    return (
        <nav>
        <Link to="/">
          <img src={icon}/>
          <h1>Bridge Stats</h1>
        </Link>
        <Link to="/home">Home</Link>
      </nav>
    )
}

export default Header;