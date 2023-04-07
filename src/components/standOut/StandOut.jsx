import React from "react";
import "./StandOut.css";

export const StandOut = () => {
    return (
        <React.Fragment>
            <aside className="standout__container reverse">
                <div className="standout__text--container">
                    <div className="standout__text--wrapper">
                        <section className="standout__header">
                            Stand out to the right audience
                        </section>
                        <section className="standout__body">
                            Using a collaborative formula of 
                            designers, researchers, photographers, 
                            videographers, and copywriters, we'll build 
                            and extend your brand in digital places
                        </section>
                        <a 
                            href="#" 
                            className="standout__btn--pink"
                            >LEARN MORE
                        </a>
                    </div>
                </div>
                <section 
                    className="standout__image--container cup" 
                />
            </aside>
        </React.Fragment>
    );
};


