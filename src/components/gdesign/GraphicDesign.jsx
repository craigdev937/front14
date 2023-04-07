import React from "react";
import "./GraphicDesign.css";

export const GraphicDesign = () => {
    return (
        <React.Fragment>
            <section className="container">
                <aside className="graphic__container">
                    <div className="image__text--wrapper text-cyan-1">
                        <div className="image__header">Graphic Design</div>
                        <div className="image__body">
                            Great design makes you memorable. 
                            We deliver artwork that underscores 
                            your brand message and captures 
                            potential client's attention.
                        </div>
                    </div>
                </aside>
                <aside className="photo__container">
                    <div className="image__text--wrapper text-dark-blue">
                        <div className="image__header">Photography</div>
                        <div className="image__body">
                            Increase your credibility by 
                            getting the most stunning, 
                            high-quality photos that 
                            improve your business image
                        </div>
                    </div>
                </aside>
            </section>
        </React.Fragment>
    );
};



