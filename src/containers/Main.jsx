import React from "react";
import { Hero } from "../components/hero/Hero";
import { Transform } from "../components/transform/Transform";
import { StandOut } from "../components/standOut/StandOut";
import { Signature } from "../components/signature/Signature";
import { GraphicDesign } from "../components/gdesign/GraphicDesign";
import { Clients } from "../components/clients/Clients";

export const Main = () => {
    return (
        <React.Fragment>
            <Hero />
            <Transform />
            <StandOut />
            <GraphicDesign />
            <Clients />
            <Signature />
        </React.Fragment>
    );
};


