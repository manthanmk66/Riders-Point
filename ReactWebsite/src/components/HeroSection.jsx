import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles/Button";
import { useGlobalContext } from "../context";
import logo from "../Assets/homebanner.jpg";

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
      <div className="container grid grid-two-column">
        <div className="section-hero-data">
          <p className="hero-top-data">Let's Ride Together</p>
          <h1 className="hero-heading">
            Riders <span style={{ color: "#8CB9BD" }}>{visibleLetters}</span>_
          </h1>
          <p className="hero-para">
            Where Every Ride Becomes an Unforgettable Experience – Welcome to Riders Point.
          </p>
          <Button className="btn hireme-btn">
            <NavLink to="/contact"> Explore </NavLink>
          </Button>
        </div>
        {/* for image  */}
        <div className="section-hero-image">
          <picture>
            <img src={logo} alt="hero image" className="hero-img " />
          </picture>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;
  

  .section-hero-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .btn {
    max-width: 16rem;
  }

  .hero-top-data {
    font-weight: 500;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.helper};
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
  }

  .section-hero-image {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  picture {
    text-align: center;
  }

  .hero-img {
    width: 1200px;
    height: 420px;
    max-width: 100%;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 7.2rem;
    }
  }
`;

export default HeroSection;


// import React from "react";
// import { NavLink } from "react-router-dom";
// import { useGlobalContext } from "../context";
// 
// import logofinal from "../Assets/logos.png"

// const HeroSection = () => {
//   const { name, image } = useGlobalContext();

//   return (
//     <section className="py-36">
//       <div className="container grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
//         <div className="text-center lg:text-left">
//           <p className="text-xs uppercase font-medium text-gray-500">THIS IS ME</p>
//           <h1 className="text-7xl font-bold text-black">Riders Point</h1>
//           <p className="mt-6 mb-12 text-lg text-gray-600">
//           Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex, culpa!
//           </p>
//           <NavLink to="/contact" className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
//             Hire Me
//           </NavLink>
//         </div>

//         {/* for image  */}
//         <div className="text-center">
//           <img src={image} alt="hero image" className="w-80" />
//         </div>
//       </div>
//     </section>
//   );
// };

{/* <div className='relative'>

<a href='/Home'><img src={logo} alt="Background" className="  w-full h-20px relative mt-[-300px]" /></a>
<h1 className="text-3xl  text-white">Start Your Dream Adventure</h1>


</div>

);
} */}

// export default HeroSection;
