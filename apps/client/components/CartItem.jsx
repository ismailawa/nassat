import React, {useContext} from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import Image from 'next/image';

import productImage from '../assets/images/pops.png';
import {AppContext} from "../context/Provider";
import {DECREASE_CART_ITEM, INCREASE_CART_ITEM} from "../constants/actionTypes";

function CartItem({item}) {
  const { cartDispatch } = useContext(AppContext);
  const handleIncrease = () => {
    cartDispatch({
      type: INCREASE_CART_ITEM,
      payload: item.product,
    });
  };
  const handleDecrease = () => {
    cartDispatch({
      type: DECREASE_CART_ITEM,
      payload: item.product,
    });
  };
  return (
    <div className="flex justify-between items-center">
      <div className="flex space-x-3 w-3/5">
        <Image src={item.product.image[0]} alt="" width={100} height={100} />
        <div className="flex flex-col justify-center">
          <h1 className="text-xl font-semibold">{item.product.name}</h1>
          <p className="text-sm text-gray-400"> {item.product.description}</p>
        </div>
      </div>
      <div className="flex items-center space-x-3 w-1/5">
        <div
          className="flex items-center justify-center w-6 h-6 border-2 border-gray-200 rounded-lg cursor-pointer"
          onClick={handleDecrease}
        >
          <IoIosArrowBack />
        </div>

        <div className="">{item.quantity}</div>
        <div
          className="flex items-center justify-center w-6 h-6 border-2 border-gray-200 rounded-lg cursor-pointer"
          onClick={handleIncrease}
        >
          <IoIosArrowForward />
        </div>
      </div>

      <h1 className="text-sm text-red-500 w-1/5">
        ₦
        {(item.totalPrice).toLocaleString(undefined, {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}
      </h1>
    </div>
  );
}

export default CartItem;
