import React from "react"
import HeroSection from "./Components/HeroSection";

const Home = () => {
    const data = {
        name: "Remax Store"
    };

    return (
        <HeroSection myData = {data}/>
    );
}

export default Home;