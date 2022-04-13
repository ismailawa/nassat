import Link from 'next/link';
import React, { useContext, useEffect } from 'react';
import MiniCartItem from './MiniCartItem';
import { AppContext } from '../context/Provider';

function MiniCart() {
  const { cartState } = useContext(AppContext);

  return (
    <div className=" absolute bg-white  w-96 rounded-lg shadow-xl border-2 border-gray-300 p-8">
      {cartState.cart.length > 0 && (
        <div className="flex flex-col space-y-2 overflow-y-scroll h-[600px]">
          {cartState.cart.map((item) => (
            <MiniCartItem key={item.product._id} item={item} />
          ))}

          <div className=" h-0.5 bg-gray-100 mt-4"></div>
          <div className="flex items-center justify-between flex-1 mt-6">
            <h1 className="text-gray-600 text-xl font-bold">Total:</h1>
            <h1 className="text-xl text-red-500">
              ₦
              {cartState.cart
                .map((item) => item.totalPrice)
                .reduce((pr, nt) => pr + nt)
                .toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
            </h1>
          </div>
          <div className=" h-0.5 bg-gray-100 mt-4"></div>
          <div className="flex flex-1 flex-col space-y-3 justify-between items-center mt-6">
            <Link href="/cart" passHref>
              <div className="flex  justify-center items-center border-2 border-red-500 rounded-2xl w-full py-2 text-red-500 hover:text-white hover:bg-red-500 font-semibold">
                VIEW CART
              </div>
            </Link>
            <Link href="/cart/checkout" passHref>
              <div className="flex justify-center items-center border-2 border-red-500 rounded-2xl w-full py-2 text-red-500 hover:text-white hover:bg-red-500 font-semibold">
                CHECKOUT
              </div>
            </Link>
            <div></div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MiniCart;
