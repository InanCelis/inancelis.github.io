
import React, {useState, useEffect} from "react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import Toggle from "./Toggle";
import NavMenu from "./Slice/NavMenu";
import SocialIcon from "./Slice/SocialIcon";
import { keepTheme } from "../utils/themes";
import "../assets/styles/menu.scss";
function Layout({ children }) {

  const [setClassName] = useState("theme-dark");
  useEffect(() => {
      keepTheme(setClassName)
  }, [setClassName])

  const [isOpen, setOpen] = useState(false);
  const [isFirstLoad, setFirstLoad] = useState(true);
  const ToggleMenu = () => {
    if (isFirstLoad) {
      setFirstLoad(false);
    }
    setOpen(!isOpen);
   };
  return (
    <>
      <div className="header">
        <header>
          <div>
            <NavLink to="/" className="logo-link"><Logo/></NavLink>
            <NavMenu />
          </div>
          <SocialIcon />
        </header>
        <Toggle  setClassName={setClassName} className="w-100 desktop-theme"/>
      </div>
      <div className="mobile-header">
        <NavLink to="/" className="logo-link"><Logo/></NavLink>
        <svg id="hamburger" className={`${isOpen ? 'open-menu' : ''} ${isFirstLoad ? 'initial-load' : ''}`} viewbox="0 0 60 40" onClick={ToggleMenu}>
          <g strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
            <path id="top-line" d="M10,10 L50,10 Z"></path>
            <path id="middle-line" d="M10,20 L50,20 Z"></path>
            <path id="bottom-line" d="M10,30 L50,30 Z"></path>
          </g>
        </svg>

        <div className={`parent-mobile ${isOpen ? 'is-open' : ''}`} >
          <div className="mobile-content-menu">
            <div></div>
            <NavMenu />
            <div className="bottom-icon">
              <SocialIcon />
              <Toggle  setClassName={setClassName} className="w-100 mobile-theme"/>
            </div>
          </div>
        </div>
      </div>
      
    </>
    
  );
}

export default Layout;