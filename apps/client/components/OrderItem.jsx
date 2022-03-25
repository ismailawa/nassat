/* eslint-disable react/jsx-no-undef */
import React from 'react';
import Image from 'next/image';
import Koko from '../assets/images/pops.png';

function OrderItem() {
  return (
    <div className="flex mb-3">
      <div className="flex w-1/2">
        <Image src={Koko} alt="" height={100} width={100} />
        <div className="flex flex-col m-3 space-y-2">
          <h1 className=" text-xl">Product Name</h1>
          <p className=" text-sm text-gray-400">Product description</p>
          <div className="flex items-center space-x-3">
            <h1 className="text-gray-400 text-sm">Qty: 2</h1>
            <h1 className="text-sm text-red-500">
              ₦
              {(3000).toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </h1>
          </div>
        </div>
      </div>
      <div className="flex w-1/2 justify-around items-center">
        <div className="flex flex-col items-center">
          <h1 className="text-gray-400 text-sm ">Status</h1>
          <h1 className=" text-red-500 font-bold">Pending</h1>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-gray-400 text-sm ">Expected delivery date</h1>
          <h1 className="font-bold">24 December 2022</h1>
        </div>
      </div>
    </div>
  );
}

export default OrderItem;
