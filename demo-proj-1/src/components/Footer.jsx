import React from "react";
// import { motion } from 'framer-motion';
import {
  FaFacebook,
  FaGoogle,
  FaInstagram,
  FaPhone,
  FaTwitter,
  FaTelegram,
} from "react-icons/fa";
import { FaMapLocation } from "react-icons/fa6";
import CreditCards from "../assets/website/credit-cards.webp";

const Footer = () => {
  return (
    <div
      className="bg-gradient-to-r from-primary to-bg-primaryDark pt-12
     pb-8 text-white"
    >
      <div className="container">
        <div
          className="grid grid-cols-1 sm:grid-cols-2 
            md:grid-cols-3 gap-8 "
        >
          {/* Company Info Section */}
          <div className="space-y-6">
            <h1 className="text-3xl font-bold uppercase">
              KevCare's Coder Coffee
            </h1>
            <p className="text-sm max-w-[300px]">
              We are a coffee company dedicated to providing the best quality
              coffee beans sourced from around the world. Our mission is to
              bring the joy of coffee to every home.
            </p>
            <div>
              <p className="flex items-center gap-2">
                <FaPhone className="text-lg" />
                +1 (234) 567-8901
              </p>
              <p className="flex items-center gap-2 mt-2">
                <FaMapLocation className="text-lg" />
                React Javascript City, CA 12345
              </p>
            </div>
          </div>

          {/* Footer Links Section */}
          <div className="space-y-6">
            <h1 className="text-3xl font-bold">Quick Links</h1>
              <div className="grid grid-cols-2 gap-3">
                {/* first column section */}
                <div>
                  <ul className="space-y-2">
                    <li className="hover:text-primary">
                      <a href="#">Home</a>
                    </li>
                    <li className="hover:text-primary">
                      <a href="#">About Us</a>
                    </li>
                    <li className="hover:text-primary">
                      <a href="#">Contact Us</a>
                    </li>
                    <li className="hover:text-primary">
                      <a href="#">Privacy Policy</a>
                    </li>
                  </ul>
                </div>
                {/* second column section */}
                <div>
                  <ul className="space-y-2">
                    <li className="hover:text-primary">
                      <a href="#">Terms of Service</a>
                    </li>
                    <li className="hover:text-primary">
                      <a href="#">FAQ</a>
                    </li>
                    <li className="hover:text-primary">
                      <a href="#">Blog</a>
                    </li>
                    <li className="hover:text-primary">
                      <a href="#">Support</a>
                    </li>
                  </ul>
                </div>
              </div>
          
          </div>
          {/* Social Links Section */}
          <div className="space-y-6">
            <h1 className="text-3xl font-bold">Follow Us</h1>
            <div className="flex items-centre gap-3">
              <a href="#" className="hover:text-primary">
                <FaFacebook className="text-3xl hover:scale-105 duration-300" />
              </a>
              <a href="#" className="hover:text-primary">
                <FaTwitter className="text-3xl hover:scale-105 duration-300" />
              </a>
              <a href="#" className="hover:text-primary">
                <FaInstagram className="text-3xl hover:scale-105 duration-300" />
              </a>
              <a href="#" className="hover:text-primary">
                <FaTelegram className="text-3xl hover:scale-105 duration-300" />
              </a>
              <a href="#" className="hover:text-primary">
                <FaGoogle className="text-3xl hover:scale-105 duration-300" />
              </a>
            </div>
          </div>
          <div>
            <h1>Payment Methods</h1>
            <img src="{CreditCards}" alt="Credit Cards" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
