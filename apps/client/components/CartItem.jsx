import React from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import Image from 'next/image';

import productImage from '../assets/images/pops.png';

function CartItem() {
  const handleSetProductCount = (productCount) => {
    console.log('hello');
  };
  return (
    <div className="flex justify-between items-center">
      <div className="flex space-x-3">
        <Image src={productImage} alt="" width={100} height={100} />
        <div className="flex flex-col justify-center">
          <h1 className="text-xl font-semibold">Product</h1>
          <p className="text-sm text-gray-400">Product description</p>
        </div>
      </div>
      <div className="flex items-center space-x-3">
        <div
          className="flex items-center justify-center w-6 h-6 border-2 border-gray-200 rounded-lg cursor-pointer"
          onClick={() => handleSetProductCount('-')}
        >
          <IoIosArrowBack />
        </div>

        <div className="">{1}</div>
        <div
          className="flex items-center justify-center w-6 h-6 border-2 border-gray-200 rounded-lg cursor-pointer"
          onClick={() => handleSetProductCount('+')}
        >
          <IoIosArrowForward />
        </div>
      </div>
      <h1 className="text-sm text-red-500">
        ₦
        {(3000).toLocaleString(undefined, {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}
      </h1>
      <h1 className="text-sm text-red-500">
        ₦
        {(3000).toLocaleString(undefined, {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}
      </h1>
    </div>
  );
}

export default CartItem;
