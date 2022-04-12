import React, {useContext} from 'react';
import Image from 'next/image';
import Koko from '../assets/images/pops.png';
import { MdDeleteForever } from 'react-icons/md';
import {AppContext} from "../context/Provider";

function MiniCartItem({item, visible=true}) {
  const { cartState, cartDispatch} = useContext(AppContext);
  const handleDelete = () => {
    cartDispatch({type: 'DELETE_CART_ITEM', payload: item.product});
  };
  return (
    <div className="flex justify-between">
      <div className="w-1/4"><Image src={item.product.image[0]} alt="image" height={80} width={80} /></div>
      <div className="w-3/4">
        <h1 className="text-sm">{item.product.name}</h1>
        <h1 className="text-gray-400 text-sm">Qty: {item.quantity}</h1>
        <h1 className="text-sm text-red-500">
          ₦
          {(item.totalPrice).toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </h1>
      </div>
      {visible && <div className="flex justify-center items-center" onClick={handleDelete}>
        <MdDeleteForever className="text-red-500 text-2xl"/>
      </div>}
    </div>
  );
}

export default MiniCartItem;
