
import airbnbLogo from "../images/airbnb-logo.png"
const Navbar =()=>
{
  return(
    <nav>
        <img src={airbnbLogo} className="nav--logo" alt="Airbnb"/>
    </nav>
  )
}

export default Navbar;