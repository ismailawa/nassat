/* eslint-disable react/jsx-no-undef */
import React from 'react';
import Image from 'next/image';
import Koko from '../assets/images/pops.png';

function OrderItem({item, status, delivered}) {
  return (
    <div className="flex mb-3">
      <div className="flex w-1/2">
        {item?.productImage && (<Image src={item?.productImage} alt="" height={100} width={100}/>)}
        <div className="flex flex-col m-3 space-y-2">
          <h1 className=" text-xl">{item?.name} </h1>
          <p className=" text-sm text-gray-400">{item?.description} </p>
          <div className="flex items-center space-x-3">
            <h1 className="text-gray-400 text-sm">Qty: {item?.quantity}</h1>
            <h1 className="text-sm text-red-500">
              ₦
              {(item?.price).toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </h1>
          </div>
        </div>
      </div>
      <div className="flex w-1/2 justify-around items-center">
        <div className="flex flex-col items-center">
          <h1 className="text-gray-400 text-sm ">Payment Status</h1>
          {
            status.toLowerCase() === 'pending' ? (
              <div className="flex items-center space-x-3">
                <h1 className="font-bold text-red-500">{status}</h1>

              </div>
            ) : status.toLowerCase() === 'paid' ? (
              <div className="flex items-center space-x-3">
                <h1 className="font-bold text-yellow-500">{status}</h1>
              </div>
            ):(
              <div className="flex items-center space-x-3">
                <h1 className="font-bold text-green-500">{status}</h1>
              </div>
            )
          }
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-gray-400 text-sm "> Delivery status</h1>
          {delivered ? (
            <h1 className=" text-green-500 font-bold">Delivered</h1>
          ) : (
            <h1 className=" text-red-500 font-bold">Not Delivered</h1>
          )}
        </div>
      </div>
    </div>
  );
}

export default OrderItem;
