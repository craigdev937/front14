import React from "react";
import "./StandOut.css";

export const StandOut = () => {
    return (
        <React.Fragment>
            <aside className="services__container reverse">
                <div className="services__text--container">
                    <div className="services__text--wrapper">
                        <section className="services__header">
                            Stand out to the right audience
                        </section>
                        <section className="services__body">
                            Using a collaborative formula of 
                            designers, researchers, photographers, 
                            videographers, and copywriters, we'll build 
                            and extend your brand in digital places
                        </section>
                        <a href="#" className="services__btn--pink">LEARN MORE</a>
                    </div>
                </div>
                <section className="services__image--container cup"></section>
            </aside>
        </React.Fragment>
    );
};

