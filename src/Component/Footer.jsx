import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faYoutube } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        {/* Logo and Description */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <div className="flex flex-col items-center">
            <img
              src="https://i.ibb.co.com/W0K1SC3/yt-new-logo.png"
              alt="EH Science Club Logo"
              className="w-20"
            />
            {/* <p className="text-sm md:text-base text-center mb-4">
              Empowering science enthusiasts through <br /> knowledge and innovation.
            </p> */}
          </div>

          {/* Subscribe and Social Buttons */}
          <div className="mt-4 md:mt-0 flex gap-3 md:gap-4">
            <a
              href="https://www.youtube.com/@ehscienceclub"
              target="_blank"
              rel="noopener noreferrer"
              className="btn border-none bg-red-600 hover:bg-red-700 text-white rounded-full flex items-center gap-2"
              aria-label="Subscribe on YouTube"
            >
              <FontAwesomeIcon icon={faYoutube} />
              Subscribe
            </a>

            <a
              href="https://www.facebook.com/scienceclub.eh"
              target="_blank"
              rel="noopener noreferrer"
              className="border-none btn bg-blue-600 hover:bg-blue-700 text-white rounded-full  flex items-center gap-2"
              aria-label="Visit Facebook Page"
            >
              <FontAwesomeIcon icon={faFacebookF} />
              Facebook
            </a>
          </div>
        </div>

        {/* Copyright and Links */}
        <div className="border-t border-gray-700 pt-4 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} EH Science Club. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
