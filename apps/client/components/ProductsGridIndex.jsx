import React, { useEffect } from 'react';
import GridProductCard from './GridProductCard';
import { useGetProductsQuery } from '../services/products';

function ProductsGridIndex({ grid, setOpen }) {
  const { data, error, isLoading, isFetching, isSuccess } =
    useGetProductsQuery();

  if (isLoading) return <div>Loading...</div>;
  return (
    <div className="flex flex-col">
      <h1 className=" text-xl ml-8 lg:text-xl text-gray-500 lg:ml-0 font-bold my-4">
        PRODUCTS
      </h1>
      {isLoading && <div>Loading...</div>}
      {error && <div>Something went wrong</div>}
      {isSuccess && (
        <div className={`grid grid-cols-1 lg:grid-cols-5 gap-4 m-8 lg:m-0`}>
          {data.data.map((item, index) => (
            <GridProductCard
              key={index}
              product={item}
              setOpen={(data) => setOpen(data)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductsGridIndex;
