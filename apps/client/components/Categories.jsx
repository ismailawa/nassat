import React from 'react';
import CategoryCard from './CategoryCard';
import pops from '../assets/images/pops.png';
import {useGetCategoriesQuery} from "../services/categories";

function Categories() {

  const { data, error, isLoading, isFetching, isSuccess } =
    useGetCategoriesQuery();

  return (
    <div className="flex flex-col m-8 lg:m-0">
      <div className="flex flex-col w-full pt-8 lg:flex-row justify-center">
        {data && data.data.map(category => (
          <CategoryCard
            key={category._id}
            title={category.categoryName}
            description={category.description}
            image={pops}
          />
        ))}

      </div>
      {/* <div className="flex justify-center items-center w-14 h-14 shadow-lg bg-blue-600 rounded-full absolute top-1/3 -right-8 z-20">
        <IoIosArrowForward size={30} color="white" />
      </div> */}
    </div>
  );
}

export default Categories;
