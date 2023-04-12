import {IoIosCloseCircle} from 'react-icons/io'
import {TbGridDots} from 'react-icons/tb'
import "./Navbar.scss"
//================== import images ================================
import logo from "../../asset/download.png"
const Navbar = () => {
    return ( <div className="header">
     <div className="header-logoDiv">
        <img src={logo} alt="" className="logo" />
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
        {/*=============================== add icons to navbar for exit ============================== */}
        <IoIosCloseCircle className='navbar-icon' />
     </div>
     <div className='signUp flex'>
        <div className='text'>Sign Up</div>
        {/*=============================== add icons to navbar for show sign-up ============================== */}
        <TbGridDots className='toggleNavbar' />
     </div>
    </div> );
}
export default Navbar;