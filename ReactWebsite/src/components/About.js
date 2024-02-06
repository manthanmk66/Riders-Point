import React from "react";
import one from "../Assets/1.jpg";
import two from "../Assets/2.jpg";
import three from "../Assets/3.jpg";
import four from "../Assets/4.jpg";
import ImageSlider from "./ImageSlider";

const About = () => {
    const slides = [
        { url: one, title: "beach" },
        { url: two, title: "boat" },
        { url: three, title: "forest" },
        { url: four, title: "for" }
    ];

    const containerStyles = {
        width: "500px",
        height: "280px",
        margin: "0 auto",
    };

    return (
        <div className="mt-60 mb-60">
           
            <h1 className="text-6xl text-richblack flex justify-center mt-4 mb-8 font-monster font-bold ">"PURE JOY ON TWO WHEELS"</h1>
          
            <div style={containerStyles}>
                <ImageSlider slides={slides} parentWidth={500} />
            </div>
        </div>
    );
};

export default About;
