import React from "react";
import { NavLink } from "react-router-dom";
import { FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {

//Email Subscription

const onSubmit = async (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);

  formData.append("access_key", "2a0ecd91-c734-4554-927b-5ce70b6c502b");

  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);

  const res = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: json
  }).then((res) => res.json());

  if (res.success) {
    console.log("Success", res);
  }
};


  return (
    <div className="bg-gray-900">
      <footer className="py-16 lg:py-20 bg-gray-800">
        <div className="max-w-6xl mx-auto grid grid-cols-1 gap-8 lg:grid-cols-4">
          <div className="text-white">
            <h3 className="text-3xl font-bold">Riders Point</h3>
            <p className="mt-4 text-white">Join your Ride with us.</p>
          </div>

          <div className="text-white">
            <h3 className="text-3xl font-bold">Subscribe to get important updates</h3>
            <form onSubmit={onSubmit} className="mt-4  text-sky-400 text-2xl font-semibold flex flex-col lg:flex-row lg:mt-6">
              <input
                type="email"
                id="emailid"
                name="emilid"
                required
                autoComplete="off"
                placeholder="Email"
                className="input-primary lg:mr-2"
              />
              <input type="submit"  value="Subscribe" className="btn-primary lg:w-auto w-full" />
            </form>
          </div>

          <div className="text-white">
            <h3 className="text-3xl font-bold">Follow Us</h3>
            <div className="flex gap-4 mt-4">
              
              {/* <FaDiscord className="text-white text-3xl" /> */}


              <a
               href="https://www.instagram.com/ther15brigade?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
               target="_blank"
               rel="noopener noreferrer"
              >
              <FaInstagram className="text-white text-3xl" />
              </a>




              <a
                href="https://www.youtube.com/watch?v=wgSIgPFZl2w/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube className="text-white text-3xl" />
              </a>
            </div>
          </div>

          <div className="text-white">
            <h3 className="text-3xl font-bold">Call Us</h3>
            <h3 className="mt-4 lg:mt-0">+91 8625001836</h3>
          </div>
        </div>

        <div className="py-16 border-t border-gray-700">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row justify-between items-center">
            <p className="text-white mb-4 lg:mb-0">
              @{new Date().getFullYear()} Riders Point. All Rights Reserved
            </p>
            <div>
              <NavLink to="/" className="text-white mr-8 hover:text-gray-500">PRIVACY POLICY</NavLink>
              <NavLink to="/" className="text-white hover:text-gray-500">TERMS & CONDITIONS</NavLink>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
