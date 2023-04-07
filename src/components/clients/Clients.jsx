import React from "react";
import "./Clients.css";

export const Clients = () => {
    return (
        <React.Fragment>
            <section className="container">
                <div className="container__wrap">
                    <div 
                        className="testimonials__header"
                        >CLIENT TESTIMONIALS
                    </div>
                    <div className="testimonials__inner--wrap">
                        <aside className="client__wrap">
                            <img
                                className="client__image"
                                alt="Emily"  
                                src="/public/image-emily.jpg" 
                            />
                            <div className="client__quote">
                                We put our trust in Sunnyside 
                                and they delivered, making sure 
                                our needs were met and deadlines 
                                were always hit.
                            </div>
                            <div className="client__info">
                                <aside 
                                    className="client__name"
                                    >Emily R.
                                </aside>
                                <aside 
                                    className="client__label"
                                    >Marketing Manager
                                </aside>
                            </div>
                        </aside>
                        <aside className="client__wrap">
                            <img 
                                className="client__image" 
                                alt="Thomas"
                                src="/public/image-thomas.jpg"
                            />
                            <div className="client__quote">
                                Sunnyside's enthusiasm coupled 
                                with their keen interest in our 
                                brand's success made it a satisfying 
                                and enjoyable experience.
                            </div>
                            <div className="client__info">
                                <aside 
                                    className="client__name"
                                    >Thomas S.
                                </aside>
                                <aside 
                                    className="client__label"
                                    >Chief Operating Officer
                                </aside>
                            </div>
                        </aside>
                        <aside className="client__wrap">
                            <img
                                alt="Jennie" 
                                className="client__image"
                                src="/public/image-jennie.jpg"
                            />
                            <div className="client__quote">
                                Incredible end result! our 
                                sales increased over 400% when 
                                we worked with Sunnyside.  
                                Highly recommended!
                            </div>
                            <div className="client__info">
                                <aside 
                                    className="client__name"
                                    >Jennie F.
                                </aside>
                                <aside 
                                    className="client__label"
                                    >Business Owner
                                </aside>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};


