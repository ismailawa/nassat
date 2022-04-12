import Layout from '../../components/Layout';
import React, {useContext, useEffect, useState} from 'react';
import { BiArrowBack } from 'react-icons/bi';
import CartItem from '../../components/CartItem';
import Link from 'next/link';
import {AppContext} from "../../context/Provider";
import {CLEAR_CART} from "../../constants/actionTypes";

const Index = () => {
  const {cartState,  cartDispatch } = useContext(AppContext);
  const handleClearCart = () => {
    cartDispatch({type: CLEAR_CART});
  };

  const [subTotal, setSubTotal] = useState(0);
  const [shipping, setShipping] = useState(0);

  useEffect(() => {

    const sub = cartState.cart.reduce((acc, item) => acc + item.totalPrice, 0);
    const ship = 1500 + ((cartState.cart.reduce((acc, item) => acc + item.quantity, 0)-1)* 100);
    setSubTotal(sub);
    setShipping(ship);
  }, [cartState]);

  return (
    <Layout>
      <div className="min-h-screen container mx-auto py-20">
        <div className="flex w-full bg-white mt-10 shadow-md">
          <div className="flex flex-col bg-white w-4/6 p-8 ">
            <div className="flex justify-between">
              <h1 className="text-xl font-semibold">Shopping Cart</h1>
              <h1 className="text-xl font-semibold">{cartState.cart.length} Items</h1>
            </div>
            <div className="h-0.5 bg-gray-200 my-3"></div>

              <div className="flex flex-col space-y-4 max-h-screen overflow-y-scroll">
                {cartState.cart.map((item, index) => (
                  <CartItem key={index} item={item} />
                ))}
              </div>

            <div className="h-0.5 bg-gray-200 my-3"></div>
            <div className="flex justify-between">
              <Link href="/shops" passHref>
                <div className="flex items-center space-x-3 cursor-pointer text-red-500">
                  <BiArrowBack size={25} />
                  <span className=" text-xl">Continue Shopping</span>
                </div>
              </Link>
              <div className="flex items-center space-x-3 cursor-pointer text-white bg-red-500 rounded-full py-2 px-5 hover:bg-red-700" onClick={handleClearCart}>
                <span className="text-xl">Clear Cart</span>
              </div>
            </div>
          </div>
          <div className=" bg-gray-200 w-2/6 p-8 flex flex-col space-y-8">
            <h1 className="font-bold text-xl">Summary</h1>
            <div className="h-0.5 bg-black my-3"></div>
            <div className="flex justify-between">
              <span className="text-xl">Subtotal</span>
              <span className="text-xl"> ₦ {subTotal.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-xl">Shipping</span>
              <span className="text-xl"> ₦ {shipping.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-xl">Tax</span>
              <span className="text-xl"> ₦ 0</span>
            </div>
            <div className="h-0.5 bg-black my-3"></div>
            <div className="flex justify-between">
              <span className="text-xl">Grand Total</span>
              <span className="text-xl"> ₦ {(shipping + subTotal).toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}</span>
            </div>
            <Link href="/cart/checkout" passHref>
              <div className="flex items-center justify-center space-x-3 cursor-pointer text-white bg-red-500 rounded-full py-2 px-5 hover:bg-red-700">
                <span className="text-xl">Checkout</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
