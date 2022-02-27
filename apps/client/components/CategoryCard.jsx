import React from 'react';
import Image from 'next/image';

function CategoryCard({ title, description, image }) {
  return (
    <div
      className="flex flex-col  bg-blue-100 rounded-lg p-8 space-y-6 mb-6 lg:mr-6
     cursor-pointer hover:scale-105 transition transform duration-500 ease-out overflow-hidden"
    >
      <h1 className="text-red-600 text-2xl font-semibold">{title}</h1>
      <p className="text-sm text-gray-500">{description}</p>
      <div className="flex bg-white rounded-xl shadow-lg justify-center w-32 items-center py-2 font-semibold text-red-500">
        Shop now
      </div>
      <div className=" w-32 h-32 -right-16 -bottom-10 absolute -rotate-45">
        <Image src={image} alt="" objectFit="cover" />
      </div>
    </div>
  );
}

export default CategoryCard;
