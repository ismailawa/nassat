/* eslint-disable @next/next/no-html-link-for-pages */
import React from 'react';
import { GiShoppingCart } from 'react-icons/gi';
import {
  FaRegEnvelope,
  FaGooglePlay,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaCcMastercard,
} from 'react-icons/fa';
import { AiFillApple } from 'react-icons/ai';

function Footer() {
  return (
    <div className="flex flex-col w-full justify-center  text-white">
      <div className="flex bg-gray-800 lg:px-20 py-5">
        <div className="flex items-start space-x-2 w-1/4">
          <h1 className="font-bold text-2xl">NASCODIRECT</h1>
          <GiShoppingCart size={40} />
        </div>
        <div className="flex-col space-y-3 w-2/4 pr-10">
          <h1 className="font-semibold">NEW TO DIRECT</h1>
          <p className=" text-gray-400 text-sm">
            Subscribe to our newsletter to get updates on our latest offers!
          </p>
          <form>
            <div className="flex items-center justify-center lg:space-x-3">
              <div className=" bg-gray-100  p-2 flex items-center rounded-md flex-1">
                <FaRegEnvelope className="  text-gray-400 m-1" />
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Enter Email Address"
                  className=" bg-gray-100 outline-none text-sm flex-1 text-gray-700"
                />
              </div>
              <input
                type="submit"
                value="Submit"
                className=" flex justify-center items-center border-2 border-white text-white rounded-xl  py-2 px-5 font-semibold hover:border-red-500 hover:text-red-500 cursor-pointer"
              />
            </div>
          </form>
        </div>
        <div className="w-1/4 pb-10">
          <div className="flex mb-6">
            <div className="flex justify-center items-center bg-red-500 w-12 h-12 rounded-lg mr-3">
              <GiShoppingCart size={40} />
            </div>
            <div>
              <h1 className=" font-semibold">DOWNLOAD DIRECT FREE APP</h1>
              <h1 className=" text-sm text-gray-300">
                Get access to exclusive offers!
              </h1>
            </div>
          </div>
          <div className="flex space-x-4">
            <a
              href="#"
              className="flex group space-x-3 justify-center items-center border-2 border-white hover:border-red-500 rounded-lg p-1 "
            >
              <AiFillApple size={30} className="group-hover:text-red-500 " />
              <div>
                <h1 className="text-xs group-hover:text-red-500  ">
                  Download on the
                </h1>
                <h1 className="group-hover:text-red-500 ">App Store</h1>
              </div>
            </a>
            <a
              href="#"
              className="flex  group space-x-3 justify-center items-center border-2 border-white hover:border-red-500  rounded-lg p-1"
            >
              <FaGooglePlay size={30} className="group-hover:text-red-500" />
              <div>
                <h1 className="group-hover:text-red-500">Get it on</h1>
                <h1 className="group-hover:text-red-500">Google Play</h1>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="flex bg-gray-700 px-20 py-10">
        <div className="flex flex-col lg:w-1/4">
          <h1 className="font-semibold text-sm mb-6">LET US HELP YOU</h1>
          <a href="#" className="text-xs text-gray-400 hover:underline">
            Help Center
          </a>
          <a href="#" className="text-xs text-gray-400 hover:underline">
            How to shop on Direct?
          </a>
          <a href="#" className="text-xs text-gray-400 hover:underline">
            Delivery options and timelines
          </a>
          <a href="#" className="text-xs text-gray-400 hover:underline">
            How to return a product on Direct?
          </a>
          <a href="#" className="text-xs text-gray-400 hover:underline">
            Report a Product
          </a>
          <a href="#" className="text-xs text-gray-400 hover:underline">
            Ship your package anywhere in Nigeria
          </a>
        </div>
        <div className="flex flex-col lg:w-1/4">
          <h1 className="font-semibold text-sm mb-6 mt-5 lg:mt-0">
            ABOUT DIRECT
          </h1>
          <a href="#" className="text-xs text-gray-400 hover:underline">
            About us
          </a>
          <a href="#" className="text-xs text-gray-400 hover:underline">
            Terms and Conditions
          </a>
          <a href="#" className="text-xs text-gray-400 hover:underline">
            Privacy and Cookie Notice
          </a>
        </div>
        <div className="flex flex-col lg:w-1/4">
          <h1 className="font-semibold text-sm mb-6 mt-5 lg:mt-0">
            MAKE MONEY WITH DIRECT
          </h1>
          <a href="#" className="text-xs text-gray-400 hover:underline">
            Help Center
          </a>
          <a href="#" className="text-xs text-gray-400 hover:underline">
            How to shop on Jumia?
          </a>
          <a href="#" className="text-xs text-gray-400 hover:underline">
            Delivery options and timelines
          </a>
          <a href="#" className="text-xs text-gray-400 hover:underline">
            How to return a product on Jumia?
          </a>
          <a href="#" className="text-xs text-gray-400 hover:underline">
            Report a Product
          </a>
          <a href="#" className="text-xs text-gray-400 hover:underline">
            Ship your package anywhere in Nigeria
          </a>
        </div>
        <div className="flex flex-col lg:w-1/4">
          <h1 className="font-semibold text-sm mb-6 mt-5 lg:mt-0">
            KEY DISTRIBUTORS LOCATIONS
          </h1>
          <a href="#" className="text-xs text-gray-400 hover:underline">
            Lagos
          </a>
          <a href="#" className="text-xs text-gray-400 hover:underline">
            Kano
          </a>
          <a href="#" className="text-xs text-gray-400 hover:underline">
            Portacourt
          </a>
          <a href="#" className="text-xs text-gray-400 hover:underline">
            Abuja
          </a>
        </div>
      </div>
      <div className="flex bg-gray-700 px-20 pb-10">
        <div className="lg:w-1/4">
          <h1 className="font-semibold text-sm mb-6">JOIN US ON</h1>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-red-500 inline-block">
              <FaFacebookF size={20} />
            </a>
            <a href="#" className="hover:text-red-500 inline-block">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="hover:text-red-500 inline-block">
              <FaYoutube size={20} />
            </a>
            <a href="#" className="hover:text-red-500 inline-block">
              <FaInstagram size={20} />
            </a>
          </div>
        </div>
        <div className="lg:w-3/4">
          <h1 className="font-semibold text-sm mb-6 mt-5 lg:mt-0">
            PAYMENT METHODS & DELIVERY PARTNERS
          </h1>
          <div className="flex-col lg:flex-row space-x-6">
            <a href="#" className="hover:text-red-500 inline-block">
              <FaCcMastercard size={20} />
            </a>
          </div>
        </div>
      </div>
      <div className="flex bg-gray-700 px-20 pb-10"></div>
    </div>
  );
}

export default Footer;
