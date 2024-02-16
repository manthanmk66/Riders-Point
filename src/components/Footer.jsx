// import React from "react";
// import styled from "styled-components";
// import { Button } from "../styles/Button";
// import { NavLink } from "react-router-dom";
// import { FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <Wrapper>
//       <section className="contact-short">
//         <div className="grid grid-two-column">
//           <div>
//             <h3>Ready to get started?</h3>
//             <h3>Talk to us today</h3>
//           </div>

//           <div className="contact-short-btn">
//             <NavLink to="/">
//               <Button>Get Started</Button>
//             </NavLink>
//           </div>
//         </div>
//       </section>

//       {/* footer section  */}

//       <footer>
//         <div className="container grid grid-four-column">
//           <div className="footer-about">
//             <h3>Thapa Technical</h3>
//             <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
//           </div>

//           {/* 2nd column */}
//           <div className="footer-subscribe">
//             <h3>Subscribe to get important updates</h3>
//             <form action="#">
//               <input
//                 type="email"
//                 required
//                 autoComplete="off"
//                 placeholder="Email"
//               />
//               <input type="submit" value="Subscribe" />
//             </form>
//           </div>

//           {/* 3rs column  */}
//           <div className="footer-social">
//             <h3>Follows Us</h3>
//             <div className="footer-social--icons">
//               <div>
//                 <FaDiscord className="icons" />
//               </div>
//               <div>
//                 <FaInstagram className="icons" />
//               </div>
//               <div>
//                 <a
//                   href="https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA"
//                   target="_blank">
//                   <FaYoutube className="icons" />
//                 </a>
//               </div>
//             </div>
//           </div>

//           {/* 4th column  */}
//           <div className="footer-contact">
//             <h3>Call Us</h3>
//             <h3>+91 12345678978</h3>
//           </div>
//         </div>

//         {/* bottom section  */}
//         <div className="footer-bottom--section">
//           <hr />
//           <div className="container grid grid-two-column">
//             <p>
//               @{new Date().getFullYear()} ThapaTechnical. All Rights Reserved
//             </p>
//             <div>
//               <p>PRIVACY POLICY</p>
//               <p>TERMS & CONDITIONS</p>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </Wrapper>
//   );
// };

// const Wrapper = styled.section`
//   .contact-short {
//     max-width: 60vw;
//     margin: auto;
//     padding: 5rem 10rem;
//     background-color: ${({ theme }) => theme.colors.bg};
//     border-radius: 1rem;
//     box-shadow: ${({ theme }) => theme.colors.shadowSupport};
//     transform: translateY(50%);
//   }
//   .contact-short-btn {
//     justify-self: end;
//     align-self: center;
//   }

//   footer {
//     padding: 14rem 0 9rem 0;
//     background-color: ${({ theme }) => theme.colors.footer_bg};

//     h3 {
//       color: ${({ theme }) => theme.colors.hr};
//       margin-bottom: 2.4rem;
//     }
//     p {
//       color: ${({ theme }) => theme.colors.white};
//     }
//     .footer-social--icons {
//       display: flex;
//       gap: 2rem;

//       div {
//         padding: 1rem;
//         border-radius: 50%;
//         border: 2px solid ${({ theme }) => theme.colors.white};

//         .icons {
//           color: ${({ theme }) => theme.colors.white};
//           font-size: 2.4rem;
//           position: relative;
//           cursor: pointer;
//         }
//       }
//     }

//     .footer-bottom--section {
//       padding-top: 9rem;

//       hr {
//         margin-bottom: 2rem;
//         color: ${({ theme }) => theme.colors.hr};
//         height: 0.1px;
//       }
//     }
//   }

//   @media (max-width: ${({ theme }) => theme.media.mobile}) {
//     .contact-short {
//       max-width: 95vw;
//       padding: 2rem 0rem;
//       display: flex;
//       justify-content: center;
//       align-items: center;

//       .contact-short-btn {
//         text-align: center;
//         justify-self: flex-start;
//       }
//     }

//     footer .footer-bottom--section {
//       padding-top: 3.2rem;
//     }
//   }
// `;

// export default Footer;


import React from "react";
import { NavLink } from "react-router-dom";
import { FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-gray-900">
      {/* <section className="max-w-3xl mx-auto py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to get started?</h3>
            <h3 className="text-3xl">Talk to us today</h3>
          </div>

          <div className="text-center lg:text-right">
            <NavLink to="/">
              <button className="btn-primary">Get Started</button>
            </NavLink>
          </div>
        </div>
      </section> */}

      {/* footer section  */}
      <footer className="py-16 bg-gray-800">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="text-white">
            <h3 className="text-3xl font-bold">Riders Point</h3>
            <p className="text-white">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </div>

          {/* 2nd column */}
          <div className="text-white">
            <h3 className="text-3xl font-bold">Subscribe to get important updates</h3>
            <form className="mt-4">
              <input
                type="email"
                id="emailid"
                name="emilid"
                required
                autoComplete="off"
                placeholder="Email"
                className="input-primary mr-2"
              />
              <input type="submit" value="Subscribe" className="btn-primary" />
            </form>
          </div>

          {/* 3rd column  */}
          <div className="text-white">
            <h3 className="text-3xl font-bold">Follow Us</h3>
            <div className="flex gap-4 mt-4">
              <div>
                <FaDiscord className="text-white text-3xl" />
              </div>
              <div>
                <FaInstagram className="text-white text-3xl" />
              </div>
              <div>
                <a
                  // href=""
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaYoutube className="text-white text-3xl" />
                </a>
              </div>
            </div>
          </div>

          {/* 4th column  */}
          <div className="text-white">
            <h3 className="text-3xl font-bold">Call Us</h3>
            <h3>+91 12345678978</h3>
          </div>
        </div>

        {/* bottom section  */}
        <div className="py-16 border-t border-gray-700">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <p className="text-white">
              @{new Date().getFullYear()} Riders Point. All Rights Reserved
            </p>
            <div>
              <p className="text-white mr-8">PRIVACY POLICY</p>
              <p className="text-white">TERMS & CONDITIONS</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
