import React from "react";
import "./Navbar.css";
import hamburger from "/icon-hamburger.svg";
import Logo from "/logo.svg";

export const Navbar = () => {
    const [toggleNav, setToggleNav] = React.useState(false);

    const handleToggle = () => {
        setToggleNav(!toggleNav);
    };

    return (
        <React.Fragment>
            <nav className="navbar">
                <section className="navbar__left">
                    <a href="#" className="navbar__logo">
                        <img src={Logo} alt="Logo" />
                    </a>
                </section>
                <section className="navbar__right">
                    <div 
                        className="navbar__menu" 
                        id={toggleNav ? "hidden" : ""}>
                        <div className="navbar__menu--inner">
                            <aside className="triangle"></aside>
                            <a 
                                href="#" 
                                className="navbar__menu--item" 
                                onClick={handleToggle}
                                >About
                            </a>
                            <a 
                                href="#" 
                                className="navbar__menu--item" 
                                onClick={handleToggle}
                                >Services
                            </a>
                            <a 
                                href="#" 
                                className="navbar__menu--item" 
                                onClick={handleToggle}
                                >Projects
                            </a>
                            <a 
                                href="#" 
                                className="navbar__menu--item" 
                                onClick={handleToggle}
                                >
                                <div 
                                    className="contact__button"
                                    >CONTACT
                                </div>
                            </a>
                        </div>
                    </div>
                    <a 
                        href="hamburger__button" 
                        onClick={handleToggle}>
                        <img
                            alt="Hamburger"
                            src={hamburger} 
                        />
                    </a>
                </section>
            </nav>
        </React.Fragment>
    );
};



