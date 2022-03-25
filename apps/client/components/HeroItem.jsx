import React from 'react';
import { IoIosGlobe } from 'react-icons/io';
import Link from 'next/link';

function HeroItem() {
  return (
    <div className="h-full w-full flex flex-col-reverse lg:flex-row  justify-between items-center">
      <div className="flex flex-col flex-none space-y-10 lg:pl-28">
        <div className="flex space-x-8 items-center justify-center">
          <h1 className="text-white lg:text-5xl font-bold text-right text-xl">
            You <br /> Order
          </h1>
          <div className="w-1 lg:h-32 h-16 bg-red-500 rounded-2xl"></div>
          <h1 className="text-red-500 lg:text-5xl font-bold text-left text-xl">
            We <br />
            Deliver
          </h1>
        </div>
        <div className="flex border-2 border-red-500 rounded-2xl justify-center py-2  px-3 items-center space-x-4">
          <IoIosGlobe size={45} color="white" />
          <h1 className=" text-white font-semibold text-2xl">
            www.nascodirect.net
          </h1>
        </div>
        <Link href="/shops/Shops" passHref>
          <div className="flex bg-red-600 rounded-full justify-center py-3 px-10 items-center top-1/2 left-1/2 cursor-pointer hover:bg-red-700">
            <h1 className=" text-white font-semibold">Shop Now</h1>
          </div>
        </Link>
      </div>
      <div className="flex flex-1 items-center justify-center">image</div>
    </div>
  );
}

export default HeroItem;
