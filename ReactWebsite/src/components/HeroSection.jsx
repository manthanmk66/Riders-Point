import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles/Button";
import { useGlobalContext } from "../context";
import ibw from "../Assets/ibw.mp4";

const HeroSection = () => {
  const dynamicWords = ["Explore", "Meetup", "Collab"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [visibleLetters, setVisibleLetters] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      let nextWord = dynamicWords[currentWordIndex];
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % dynamicWords.length);
      setVisibleLetters(""); // Reset visible letters when changing word
      for (let i = 0; i < nextWord.length; i++) {
        setTimeout(() => setVisibleLetters((prev) => prev + nextWord[i]), i * 200);
      }
    }, 2500); // Change word every 2.5 seconds

    return () => clearInterval(interval);
  }, [currentWordIndex]);

  return (
    <Wrapper>
      <div className="section-hero-image relative h-screen">
        <video className="absolute inset-0 w-full h-full object-cover z-0" src={ibw} autoPlay loop />
        <div className="overlay absolute inset-0 flex flex-col justify-center items-center z-10">
          <div className="section-hero-data text-center text-white">
            <p className="hero-top-data text-semibold">Let's Ride Together</p>
            <h1 className="hero-heading text-white">
              Riders <span className="text-cyan-400">{visibleLetters}</span>_
            </h1>
            <p className="hero-para">
              Where Every Ride Becomes an Unforgettable Experience – Welcome to Riders Point.
            </p>
            <Button className="btn hireme-btn">
              <NavLink to="/rides"> Explore </NavLink>
            </Button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 0 0 9rem; /* Add padding to the bottom */
  margin-top: -3rem; /* Adjust the margin to move the hero section up */
  background-color: rgba(0, 0, 0, 0.4);
  
  .section-hero-data {
    padding: 0 2rem;
  }

  .btn {
    max-width: 16rem;
  }

  .hero-top-data {
    font-weight: 500;
    font-size: 1.5rem;
    font-family: 'Montserrat', sans-serif;
  }

  .hero-heading {
    font-size: 6.4rem;
    font-family: 'Montserrat', sans-serif;
  }

  .hero-para {
    margin-top: 1.5rem;
    margin-bottom: 3.4rem;
    max-width: 60rem;
    font-family: 'Montserrat', sans-serif;
  }
`;

export default HeroSection;



