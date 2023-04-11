import { Link } from "react-router-dom";

//================== import images ================================
import logo from "../../asset/download.png"
const Navbar = () => {
    return ( <div className="header">
     <div className="logoDiv">
        <img src={logo} alt="" className="logo" style={{height:'100px',width:"100px"}} />
     </div>

    {/* ==========================the menuBar and it's options====================== */}
     <div className="navbar">
        <ul className="navbar-menu">
            <li className="navbar-menu-item">
                <a href="/#" className="link">Used Cars</a>
            </li>
            <li className="navbar-menu-item">
                <a href="/#" className="link">New Cars</a>
            </li>
            <li className="navbar-menu-item">
                <a href="/#" className="link">Auctions</a>
            </li>
            <li className="navbar-menu-item">
                <a href="/#" className="link">Sell</a>
            </li>
        </ul>
     </div>

    </div> );
}
 
export default Navbar;