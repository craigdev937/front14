import React from "react";
import "./Footer.css";
import logo from "/public/logo.svg";

export const Footer = () => {
    const [color, setColor] = React.useState("--footer");

    const setStyle = (newColor) => {
        setColor(newColor);
        console.log(color);
    };

    return (
        <React.Fragment>
            <footer className="footer__container">
                <div className="footer__wrap">
                    <a href="#" className="footer__logo"></a>
                    <aside className="footer__links--wrap">
                        <a href="#" className="footer__link">About</a>
                        <a href="#" className="footer__link">Services</a>
                        <a href="#" className="footer__link">Projects</a>
                    </aside>
                    <aside className="social__icons--wrap">
                        <a href="#">
                            <img
                                className="social__icon"
                                alt="Facebook"  
                                src="/icon-facebook.svg" 
                            />
                        </a>
                        <a href="#">
                            <img
                                className="social__icon"
                                alt="Instagram"  
                                src="/public/icon-instagram.svg"
                            />
                        </a>
                        <a href="#">
                            <img
                                className="social__icon"
                                alt="Twitter"  
                                src="/public/icon-twitter.svg"
                            />
                        </a>
                        <a href="#">
                            <img
                                className="social__icon"
                                alt="Pinterest"  
                                src="/public/icon-pinterest.svg"
                            />
                        </a>
                    </aside>
                </div>
            </footer>
        </React.Fragment>
    );
};



