import React from 'react';
import Image from 'next/image';
import Koko from '../assets/images/pops.png';
import { MdDeleteForever } from 'react-icons/md';

function MiniCartItem() {
  return (
    <div className="flex justify-between">
      <Image src={Koko} alt="" height={80} width={80} />
      <div>
        <h1>Product Name</h1>
        <h1 className="text-gray-400 text-sm">Qty: 2</h1>
        <h1 className="text-sm text-red-500">
          ₦
          {(3000).toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </h1>
      </div>
      <div className="flex justify-center items-center">
        <MdDeleteForever className="text-red-500 text-2xl" />
      </div>
    </div>
  );
}

export default MiniCartItem;
