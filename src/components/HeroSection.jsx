// import React from "react";
// import { NavLink } from "react-router-dom";
// import styled from "styled-components";
// import { Button } from "../styles/Button";
// import { useGlobalContext } from "../context";

// const HeroSection = () => {
//   const { name, image } = useGlobalContext();

//   return (
//     <Wrapper>
//       <div className="container grid grid-two-column">
//         <div className="section-hero-data">
//           <p className="hero-top-data">THIS IS ME</p>
//           <h1 className="hero-heading">{name}</h1>
//           <p className="hero-para">
//             I'm {name}. A Full stack Developer, youtuber and freelancer. A Full
//             stack Developer, youtuber and freelancer.
//           </p>
//           <Button className="btn hireme-btn">
//             <NavLink to="/contact"> hire me </NavLink>
//           </Button>
//         </div>

//         {/* for image  */}
//         <div className="section-hero-image">
//           <picture>
//             <img src={image} alt="hero image" className="hero-img " />
//           </picture>
//         </div>
//       </div>
//     </Wrapper>
//   );
// };

// const Wrapper = styled.section`
//   padding: 9rem 0;

//   .section-hero-data {
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//   }

//   .btn {
//     max-width: 16rem;
//   }

//   .hero-top-data {
//     text-transform: uppercase;
//     font-weight: 500;
//     font-size: 1.5rem;
//     color: ${({ theme }) => theme.colors.helper};
//   }

//   .hero-heading {
//     text-transform: uppercase;
//     font-size: 6.4rem;
//   }

//   .hero-para {
//     margin-top: 1.5rem;
//     margin-bottom: 3.4rem;
//     max-width: 60rem;
//   }

//   .section-hero-image {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//   }

//   picture {
//     text-align: center;
//   }

//   .hero-img {
//     max-width: 80%;
//   }

//   @media (max-width: ${({ theme }) => theme.media.mobile}) {
//     .grid {
//       gap: 7.2rem;
//     }
//   }
// `;

// export default HeroSection;

import React from "react";
import { NavLink } from "react-router-dom";
import { useGlobalContext } from "../context";
import logo from "../Assets/homebanner.jpg";
import logofinal from "../Assets/logos.png"

const HeroSection = () => {
  const { name, image } = useGlobalContext();

  return (
//     <section className="py-36">
//       <div className="container grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
//         <div className="text-center lg:text-left">
//           <p className="text-xs uppercase font-medium text-gray-500">THIS IS ME</p>
//           <h1 className="text-7xl font-bold text-black">{name}</h1>
//           <p className="mt-6 mb-12 text-lg text-gray-600">
//             I'm {name}. A Full stack Developer, youtuber and freelancer. A Full
//             stack Developer, youtuber and freelancer.
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
<div className='relative'>

<a href='/Home'><img src={logo} alt="Background" className="  w-full h-50px relative mt-[-300px]" /></a>
<h1 className="text-3xl  text-white">Start Your Dream Adventure</h1>


</div>

);
}

export default HeroSection;
