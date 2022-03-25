/* eslint-disable @next/next/no-html-link-for-pages */
import React, { useState, useEffect } from 'react';
import NavItem from './NavItem';
import ExpandedNavItem from './ExpandedNavItem';
import { BsCart4, BsHeartFill } from 'react-icons/bs';
import Logo from '../assets/images/logo.png';
import Image from 'next/image';
import { motion } from 'framer-motion';
import MiniCart from './MiniCart';
import Link from 'next/link';

function NavBar({ initialMenu = 'home' }) {
  const config = {
    damping: 10,
    stiffness: 50,
  };
  const [selectedMenu, setSelectedMenu] = useState(initialMenu);
  const [clientWindowHeight, setClientWindowHeight] = useState('');
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  const handleScroll = () => {
    setClientWindowHeight(window.scrollY);
  };
  return (
    <div
      className={`h-20 w-full  fixed left-0 right-0 z-50 shadow:md ${'text-black'} ${
        clientWindowHeight > 100 ? ' bg-white' : ' bg-transparent'
      } transition-colors duration-500 ease-in-out `}
    >
      <div
        className={`container  mx-auto flex justify-between items-center h-full px-8 `}
      >
        <div className="flex justify-center items-center w-40 h-40">
          <Image src={Logo} alt="" objectFit="cover" />
        </div>
        <div className="flex space-x-8">
          <div className=" hidden lg:flex space-x-8 items-center">
            <NavItem
              direct="/"
              title="Home"
              isActive={Boolean(selectedMenu === 'home')}
              setSelected={() => setSelectedMenu('home')}
            />
            <NavItem
              direct="/shops"
              title="Shop"
              isActive={Boolean(selectedMenu === 'shop')}
              setSelected={() => setSelectedMenu('shop')}
            />
            <NavItem
              direct="/contact"
              title=" Contact Us"
              isActive={Boolean(selectedMenu === 'contact')}
              setSelected={() => setSelectedMenu('contact')}
            />
            <NavItem
              direct="/orders"
              title=" Orders"
              isActive={Boolean(selectedMenu === 'order')}
              setSelected={() => setSelectedMenu('order')}
            />
          </div>
          <div className="hidden lg:flex space-x-2 items-center">
            <NavItem direct="/auth/Login" title="Login" />

            <div className=" w-0.5 h-5 bg-slate-500"></div>
            <a
              href="/auth/Signup"
              className={`${'bg-red-600'} rounded-full ${'text-white'} px-4 py-2 hover:bg-red-800 cursor-pointer`}
            >
              Signup
            </a>
          </div>
          <div className="flex space-x-2 items-center">
            <Link href="/favourite" passHref>
              <div className="flex justify-center items-center w-10 h-10 relative cursor-pointer">
                <div className="flex justify-center items-center w-5 h-5 bg-red-600 rounded-full text-white text-sm absolute right-0 top-0">
                  5
                </div>
                <BsHeartFill size={25} />
              </div>
            </Link>
            <ExpandedNavItem Icon={BsCart4} items={2}>
              <motion.div
                transition={config}
                initial={{ scale: 0, opacity: 0, x: '0px', y: '0px' }}
                animate={{
                  scale: 1,
                  opacity: 1,
                  x: '-400px',
                  y: '30px',
                }}
                exit={{ x: 0, opacity: 0 }}
              >
                <MiniCart />
              </motion.div>
            </ExpandedNavItem>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
