import {IoIosCloseCircle} from 'react-icons/io'
import {TbGridDots} from 'react-icons/tb'
import { useState } from 'react'
import "./Navbar.scss"
//================== import images ================================
import logo from "../../asset/download.png"
const Navbar = () => {

    //statment to toggle navbar items in small sizes
    const [navbar , setNavbar] = useState('navbar')
    // function to handel navbar (show) in small sizes
    const showNavbarHandler = ()=>{
        setNavbar('navbar showNavbar')
    }

    // function to handel navar (hide) in small sizes
    const removeNavbarHandler = ()=>{
        setNavbar('navbar')
    }
    
    // function to add a background for navbar when we scroll a certain eight of the window
    const [header , setHeader] = useState('header')
    const addBg = () =>{
        if(window.scrollY >= 20){
            setHeader('header addBg')
        }
    }
    const removeBg = () =>{
        if(window.scrollY < 20){
            setHeader('header')
        }
    }
    window.addEventListener('scroll', addBg)
    window.addEventListener('scroll', removeBg)

    return ( <div className={header} >
     <div className="logoDiv">
        <img src={logo} alt="" className="logo" />
     </div>

    {/* ==========================the menuBar and it's options====================== */}
     <div className={navbar}>
        <ul className="menu">
            <li className="listItem">
                <a href="/#" className="link">Used Cars</a>
            </li>
            <li className="listItem">
                <a href="/#" className="link">New Cars</a>
            </li>
            <li className="listItem">
                <a href="/#" className="link">Auctions</a>
            </li>
            <li className="listItem">
                <a href="/#" className="link">Sell</a>
            </li>
        </ul>
        {/*=============================== add icons to navbar for exit ============================== */}
        <IoIosCloseCircle className='closeIcon' onClick={removeNavbarHandler}/>
     </div>
     <div className='signUp flex'>
        <div className='text'>Sign Up</div>
        {/*=============================== add icons to navbar for show sign-up ============================== */}
        <TbGridDots className='toggleNavbar' onClick={showNavbarHandler}/>
     </div>
    </div> );
}
export default Navbar;