// import React from "react";
// import styled from "styled-components";
// import { useGlobalContext } from "./context";
// import { NavLink } from "react-router-dom";
// import { Button } from "./styles/Button";
import React from "react";
import one from "./Assets/1.jpg"
import two from "./Assets/2.jpg";
import three from "./Assets/3.jpg";
import four from "./Assets/4.jpg";
import five from "./Assets/11.jpg";
import six from "./Assets/12.jpg";
import seven from "./Assets/13.jpg"
import ImageSlider from "./components/ImageSlider"

// const Services = () => {
//   const { services } = useGlobalContext();
//   console.log(services);

  // return (
  //   <Wrapper className="section">
  //     <h2 className="common-heading">Our Services</h2>
   const Services = () => {
    const slides = [
        { url: one, title: "beach" },
        { url: two, title: "boat" },
        { url: three, title: "forest" },
        { url: four, title: "for" },
        { url: five, title: "fr" },
        { url: six, title: "fd" },
        { url: seven, title: "fa" }
    ];

    const containerStyles = {
      width: "800px",  // Increase the width
      height: "400px", // Increase the height
      margin: "0 auto",
    };
    

    return (
        <div className="mt-50 mb-56">
           
            <h1 className="text-6xl text-richblack flex justify-center mt-5 mb-12 font-monster font-bold " style={{ fontFamily: "Montserrat"}}>"PURE JOY ON TWO WHEELS"</h1>
          
            <div style={containerStyles}>
                <ImageSlider slides={slides} parentWidth={600} />
            </div>
        </div>
    // </Wrapper>
  );
};


/*
{ const Wrapper = styled.section`
  padding: 9rem 0;
  background-color: ${({ theme }) => theme.colors.bg};

  .container {
    max-width: 120rem;
  }

  .card {
    border: 0.1rem solid rgb(170 170 170 / 40%);
    .card-data {
      padding: 0 2rem;
    }

    h3 {
      margin: 2rem 0;
      font-weight: 300;
      font-size: 2.4rem;
    }
    .btn {
      margin: 2rem auto;
      background-color: rgb(0 0 0 / 0%);
      border: 0.1rem solid rgb(98 84 243);
      display: flex;
      justify-content: center;
      align-items: center;
      color: rgb(98 84 243);
      font-size: 1.4rem;

      &:hover {
        background-color: rgb(98 84 243);
        color: #fff;
      }
    }
  }

  figure {
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    transition: all 0.5s linear;
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 0%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      transition: all 0.2s linear;
      cursor: pointer;
    }
    &:hover::after {
      width: 100%;
    }
    &:hover img {
      transform: scale(1.2);
    }
    img {
      max-width: 90%;
      margin-top: 1.5rem;
      height: 20rem;
      transition: all 0.2s linear;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.tab}) {
    .grid-three-column {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-two-column,
    .grid-three-column {
      grid-template-columns: 1fr;
    }
  }
`; }*/

 export default Services;
