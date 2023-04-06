import React from "react";
import "./Transform.css";

export const Transform = () => {
    return (
        <React.Fragment>
            <section className="transform__container">
                <aside className="transform__text--container">
                    <div className="transform__text--wrapper">
                        <div className="transform__header">
                            Transform your brand
                        </div>
                        <div className="transform__body">
                            We are full-service creative 
                            agency specializing in helping 
                            brands grow fast. Engage your 
                            clients through compelling visuals 
                            that do most of the marketing for you.
                        </div>
                        <a 
                            href="#" 
                            className="transform__button"
                            >LEARN MORE
                        </a>
                    </div>
                </aside>
                <aside className="transform__image egg"></aside>
            </section>
        </React.Fragment>
    );
};


