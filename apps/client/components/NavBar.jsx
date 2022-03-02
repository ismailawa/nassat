import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import NavItem from './NavItem';
import ExpandedNavItem from './ExpandedNavItem';
import { BsCart4, BsHeartFill, BsEyeFill } from 'react-icons/bs';
import { motion } from 'framer-motion';

function NavBar({ initialMenu = 'home' }) {
  const config = {
    type: 'spring',
    damping: 20,
    stiffness: 100,
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
        <div>
          <Link href="/">
            <a className="text-3xl font-bold text-red-500">Home</a>
          </Link>
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
              direct="/shops/Shops"
              title="Shop"
              isActive={Boolean(selectedMenu === 'shop')}
              setSelected={() => setSelectedMenu('shop')}
            />
            <NavItem
              direct="/contact/Contact"
              title=" Contact Us"
              isActive={Boolean(selectedMenu === 'contact')}
              setSelected={() => setSelectedMenu('contact')}
            />
            <NavItem
              direct="/orders/Orders"
              title=" Orders"
              isActive={Boolean(selectedMenu === 'order')}
              setSelected={() => setSelectedMenu('order')}
            />
          </div>
          <div className="hidden lg:flex space-x-2 items-center">
            <NavItem direct="/auth/Login" title="Login" />

            <div className=" w-0.5 h-5 bg-slate-500"></div>
            <a
              className={`${'bg-red-600'} rounded-full ${'text-white'} px-4 py-2 hover:bg-red-800 cursor-pointer`}
            >
              Signup
            </a>
          </div>
          <div className="flex space-x-2 items-center">
            <ExpandedNavItem Icon={BsHeartFill} items={10}>
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
                <div className=" absolute bg-white  w-96 rounded-lg shadow-xl border-2 border-gray-300 p-8">
                  {' '}
                  hello world
                </div>
              </motion.div>
            </ExpandedNavItem>
            <ExpandedNavItem Icon={BsCart4} items={2} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
