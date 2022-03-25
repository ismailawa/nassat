import React, { useState } from 'react';
import Image from 'next/image';
import { Star } from 'react-star';
import { MdAddShoppingCart } from 'react-icons/md';

import { AiOutlineHeart, AiFillHeart, AiOutlineEye } from 'react-icons/ai';

function GridProductCard({ product, setOpen }) {
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className="group flex flex-col shadow-md rounded-xl bg-white p-4 space-y-1 hover:scale-105 transition transform duration-500 ease-out min-h-[200px]">
      <div className=" border-2 border-gray-300 rounded-xl mb-3 p-6 w-full h-72 relative">
        <Image src={product.image[0]} alt="product" layout="fill" />
        {isLiked ? (
          <AiFillHeart
            className=" absolute left-8 top-6 cursor-pointer"
            size={25}
            color="red"
            onClick={handleLike}
          />
        ) : (
          <AiOutlineHeart
            className=" absolute left-8 top-6 cursor-pointer"
            size={25}
            color="red"
            onClick={handleLike}
          />
        )}

        <AiOutlineEye
          className=" absolute right-8 top-6 cursor-pointer"
          size={25}
          color="red"
          onClick={() => {
            setOpen({ isOpen: true, product });
            // router.push('/product/[id]', `/product/${product.id}`);
          }}
        />
      </div>
      <h1 className=" font-semibold">{product.name}</h1>
      <p className=" text-sm font-light">{product.category?.name}</p>
      <p className=" text-xs font-extralight">{product.description}</p>
      <div className="flex justify-between">
        <span className="text-sm">
          ₦
          {product.price.toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </span>
        {product?.comparePrice > 0 && (
          <span className="text-sm font-extralight line-through">
            ₦
            {product?.comparePrice[0].toLocaleString(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </span>
        )}
      </div>
      <Star
        defaultValue={product.rating}
        fraction={2}
        readOnly={true}
        shape="thin"
      />

      <div className="flex cursor-pointer justify-center items-center bg-red-500 text-white rounded-lg py-2 mt-3 space-x-3">
        <MdAddShoppingCart />
        <span>ADD TO CART</span>
      </div>
    </div>
  );
}

export default GridProductCard;
