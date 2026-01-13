import React from "react";
import { motion } from 'framer-motion';
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
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              delay: 0.2,
              duration: 0.6,
            }}

            className="space-y-6"
          >
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
          </motion.div>

          {/* Footer Links Section */}
          <motion.div 
             initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              delay: 0.4,
              duration: 0.6,
            }}

             className="space-y-6">
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
          </motion.div>
          {/* Social Links Section */}
          <motion.div 
            
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              delay: 0.6,
              duration: 0.6,
            }}
            
            className="space-y-6">

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
            <div>
              <h1 className="text-xl font-semibold mb-2">Payment Methods</h1>
              <img src={CreditCards} alt="Credit Cards" className="w-[80%]" />
            </div>
          </motion.div>
        </div>
        {/* copyright section */}
        <p 
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              delay: 0.8,
              duration: 0.6,
            }}

          className="text-white text-center mt-8 pt-8 border-t-2">
          &copy; {new Date().getFullYear()} KevCare's Coder Coffee. All rights
          reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
