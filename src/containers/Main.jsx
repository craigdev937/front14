import React from "react";
import { Hero } from "../components/hero/Hero";
import { Transform } from "../components/transform/Transform";
import { StandOut } from "../components/standOut/StandOut";
import { GraphicDesign } from "../components/gdesign/GraphicDesign";
import { Clients } from "../components/clients/Clients";
import { Food } from "../components/food/Food";
import { Footer } from "../components/footer/Footer";
import { Signature } from "../components/signature/Signature";

export const Main = () => {
    return (
        <React.Fragment>
            <Hero />
            <Transform />
            <StandOut />
            <GraphicDesign />
            <Clients />
            <Food />
            <Footer />
            <Signature />
        </React.Fragment>
    );
};


