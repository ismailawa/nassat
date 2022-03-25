import Layout from '../../components/Layout';
import React, { useState } from 'react';
import { BiArrowBack } from 'react-icons/bi';
import CartItem from '../../components/CartItem';
import Link from 'next/link';

const index = () => {
  return (
    <Layout>
      <div className="min-h-screen container mx-auto py-20">
        <div className="flex w-full bg-white mt-10 shadow-md">
          <div className="flex flex-col bg-white w-4/6 p-8 ">
            <div className="flex justify-between">
              <h1 className="text-xl font-semibold">Shopping Cart</h1>
              <h1 className="text-xl font-semibold">3 Items</h1>
            </div>
            <div className="h-0.5 bg-gray-200 my-3"></div>
            <div className="">
              <div className="flex flex-col space-y-4">
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
              </div>
            </div>
            <div className="h-0.5 bg-gray-200 my-3"></div>
            <div className="">
              <Link href="/shops" passHref>
                <div className="flex items-center space-x-3 cursor-pointer text-red-500">
                  <BiArrowBack size={25} />
                  <span className=" text-xl">Continue Shopping</span>
                </div>
              </Link>
            </div>
          </div>
          <div className=" bg-gray-200 w-2/6 p-8 ">Summary</div>
        </div>
      </div>
    </Layout>
  );
};

export default index;
