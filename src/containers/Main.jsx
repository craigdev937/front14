import React from "react";
import { Hero } from "../components/hero/Hero";
import { Transform } from "../components/transform/Transform";
import { StandOut } from "../components/standOut/StandOut";

export const Main = () => {
    return (
        <React.Fragment>
            <Hero />
            <Transform />
            <StandOut />
        </React.Fragment>
    );
};


