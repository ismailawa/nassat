import Layout from '../../components/Layout';
import React, { useContext, useEffect, useState } from 'react';
import Image from 'next/image';
import { AppContext } from '../../context/Provider';
import {
  CLEAR_FAVOURITE,
  GET_FROM_FAVOURITE,
  ADD_TO_CART,
} from '../../constants/actionTypes';
import { BiArrowBack } from 'react-icons/bi';
import { MdAddShoppingCart } from 'react-icons/md';
import Link from 'next/link';

function Index() {
  const { favouriteState, favouriteDispatch, cartDispatch } =
    useContext(AppContext);

  const handleClearCart = () => {
    favouriteDispatch({ type: CLEAR_FAVOURITE });
  };

  useEffect(() => {
    favouriteDispatch({ type: GET_FROM_FAVOURITE });
  }, []);

  const handleAddToCart = (product) => {
    cartDispatch({
      type: ADD_TO_CART,
      payload: product,
    });
  };

  return (
    <Layout>
      <div className="container min-h-screen mx-auto pt-32 mb-10">
        <div className="flex flex-col bg-white">
          <div className="flex p-8">
            <h1 className=" font-bold text-2xl text-red-500">Favourites</h1>
          </div>
          <div className=" h-1 bg-gray-200"></div>
          <div className="flex flex-col space-y-4 max-h-screen overflow-y-scroll">
            {favouriteState.favourite.map((item, index) => (
              <div key={index} className="flex space-x-8 items-center px-8">
                <Image
                  src={item.product.image[0]}
                  alt=""
                  width={100}
                  height={100}
                />
                <div className="flex flex-col justify-center">
                  <h1 className="text-xl font-semibold">{item.product.name}</h1>
                  <p className="text-sm text-gray-400">
                    {' '}
                    {item.product.description}
                  </p>
                  <p className="text-sm text-gray-400">
                    {' '}
                    NGN {item.product.price}
                  </p>
                </div>

                <div className="flex justify-end items-end w-full">
                  <div
                    className="flex cursor-pointer justify-center items-center bg-red-800 text-white rounded-lg h-6 px-4"
                    onClick={() => handleAddToCart(item.product)}
                  >
                    <MdAddShoppingCart />
                    <span>ADD TO CART</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="h-0.5 bg-gray-200 my-3"></div>
          <div className="flex justify-between px-8 pb-6">
            <Link href="/shops" passHref>
              <div className="flex items-center space-x-3 cursor-pointer text-red-500">
                <BiArrowBack size={25} />
                <span className=" text-xl">Continue Shopping</span>
              </div>
            </Link>
            <div
              className="flex items-center space-x-3 cursor-pointer text-white bg-red-500 rounded-full py-2 px-5 hover:bg-red-700"
              onClick={handleClearCart}
            >
              <span className="text-xl">Clear Favourite</span>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Index;
