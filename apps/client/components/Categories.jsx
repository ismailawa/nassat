import React from 'react';
import CategoryCard from './CategoryCard';
import pops from '../assets/images/pops.png';

function Categories() {
  return (
    <div className="flex flex-col m-8 lg:m-0">
      <h1 className=" text-xl lg:text-2xl font-bold lg:mt-8">CATEGORIES</h1>
      <div className="flex flex-col w-full pt-8 lg:flex-row">
        <CategoryCard
          title="Biscuit"
          description="Discover detergents that are trusted by millions of families."
          image={pops}
        />
        <CategoryCard
          title="Detergent"
          description="Discover detergents that are trusted by millions of families."
          image={pops}
        />
        <CategoryCard
          title="Cereal"
          description="Discover detergents that are trusted by millions of families."
          image={pops}
        />
        <CategoryCard
          title="Soap"
          description="Discover detergents that are trusted by millions of families."
          image={pops}
        />
        <CategoryCard
          title="Other"
          description="Discover detergents that are trusted by millions of families."
          image={pops}
        />
      </div>
      {/* <div className="flex justify-center items-center w-14 h-14 shadow-lg bg-blue-600 rounded-full absolute top-1/3 -right-8 z-20">
        <IoIosArrowForward size={30} color="white" />
      </div> */}
    </div>
  );
}

export default Categories;
