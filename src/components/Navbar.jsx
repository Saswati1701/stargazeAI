import React, { useState } from 'react'
// import { navigation } from '../constants'
import { navigation } from '../constants';
import { useLocation } from 'react-router'
import { useMediaQuery } from "react-responsive";
import { Link } from 'react-scroll';
import logo from '../assets/logoimage.png'
// import { IoClose, IoMenu } from "react-icons/io5";

const Navbar = () => {
    const [active, setActive] = useState();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const isMobile = useMediaQuery({ maxWidth: "1150px" });
  
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
  
    const closeMobileMenu = () => {
      if (isMobile) {
        setIsMenuOpen(false);
      }
    };
    const handleClick = (url) => {
      setActive(url);
      closeMobileMenu();
  }
  
    const renderNavLinks = () => {
      const listClassName = isMobile ? "nav__list" : "nav__list__web";
  
      return (
        <ul className={listClassName}>
          {navigation.map((item, index)=>(
              <li key={item.id} className='nav__item'>
                  <Link 
                      className={`nav__link ${window.location.pathname === `/${item.url}`? "active":"inactive"} ${index == navigation.length-1? "yellow-button" : "notButtons"}`} 
                      onClick={()=>{handleClick(item.url)}}
                      to={item.url}
                  >
                      {item.title}
                  </Link>
              </li>
          ))}
        </ul>
      );
    };
  
    return (
      <header className="header">
        <nav className="nav container">
          <Link to="/" className="nav__logo">
            <div style={{
                height: "3rem",
                width: "3rem",
                backgroundImage: "linear-gradient(#6534F4, #AD8CF2)",
                marginLeft: "4rem",
                borderRadius: "50%",
            }}></div>
            <img className='logo' src={logo} alt="logo" />
          </Link>
  
          {isMobile && (
            <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
              {/* <IoMenu /> */}
            </div>
          )}
  
          {isMobile ? (
            <div
              className={`nav__menu  ${isMenuOpen ? "show-menu" : ""}`}
              id="nav-menu"
            >
              {renderNavLinks()}
              <div className="nav__close" id="nav-close" onClick={toggleMenu}>
                {/* <IoClose /> */}
              </div>
            </div>
          ) : (
            renderNavLinks()
          )}
        </nav>
      </header>
    );
  };

export default Navbar