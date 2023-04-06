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
                    <aside className="hero__header"
                        >WE ARE CREATIVES
                    </aside>
                    <aside className="hero__arrow">
                        <img src={Aarow} alt="Arrow Down" />
                    </aside>
                </div>
            </section>
        </React.Fragment>
    );
};



