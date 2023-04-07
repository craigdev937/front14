import React from "react";
import "./Food.css";
import milkDesktop from "/desktop/image-gallery-milkbottles.jpg";
import milkMobile from "/mobile/image-gallery-milkbottles.jpg";
import orangeDesktop from "/desktop/image-gallery-orange.jpg";
import orangeMobile from "/mobile/image-gallery-orange.jpg";
import coneDesktop from "/desktop/image-gallery-cone.jpg";
import coneMobile from "/mobile/image-gallery-cone.jpg";
import sugarDesktop from "/desktop/image-gallery-sugarcubes.jpg";
import sugarMobile from "/mobile/image-gallery-sugar-cubes.jpg";

export const Food = () => {
    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
    const milk = windowWidth >= 769 ? milkDesktop : milkMobile;
    const orange = windowWidth >= 769 ? orangeDesktop : orangeMobile;
    const cone = windowWidth >= 769 ? coneDesktop : coneMobile;
    const sugar = windowWidth >= 769 ? sugarDesktop : sugarMobile;

    React.useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <React.Fragment>
            <section className="food__container">
                <img className="food__img" src={milk} alt="Milk" />
                <img className="food__img" src={orange} alt="Orange" />
                <img className="food__img" src={cone} alt="Cone" />
                <img className="food__img" src={sugar} alt="Sugar" />
            </section>
        </React.Fragment>
    );
};


