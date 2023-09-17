import React from "react"
import HeroSection from "./Components/HeroSection";
import Services from "./Components/Services";
import Trusted from "./Components/Trusted";
import FeatureProdcuts from "./Components/FeatureProducts";

const Home = () => {
    const data = {
        name: "Remax Store"
    };

    return (
        <>
        <HeroSection myData = {data}/>
        <FeatureProdcuts />
        <Services />
        <Trusted />
        </>
    );
}

export default Home;