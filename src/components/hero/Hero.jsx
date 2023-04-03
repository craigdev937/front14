import React from "react";
import "./Hero.css";
import Aarow from "/icon-arrow-down.svg";
import { Navbar } from "../navbar/Navbar";

export const Hero = () => {
    return (
        <React.Fragment>
            <section className="hero__container">
                <Navbar />
                <div className="hero__header-wrap">
                    <div className="hero__header">WE ARE CREATIVES</div>
                    <div className="hero__arrow">
                        <img src={Aarow} alt="Arrow Down" />
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};



