/* eslint-disable react/jsx-key */
import React, { useState, useEffect } from 'react';
import ProductsGrid from '../../components/ProductsGrid';
import productImage from '../../assets/images/pops.png';
import { FaSearch } from 'react-icons/fa';
import Layout from '../../components/Layout';

function Shops({ productsList, categoriesList }) {
  const [products, setProducts] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [categoryFilter, setCategoryFilter] = useState([]);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    if (searchText !== '' || categoryFilter.length > 0) {
      if (searchText !== '') {
        setProducts(
          productsList.filter((product) =>
            product.name.toLowerCase().includes(searchText.toLowerCase())
          )
        );
      }
      if (categoryFilter.length > 0) {
        setProducts(
          productsList.filter((product) =>
            categoryFilter.includes(product.category.name.toLowerCase())
          )
        );
      }
    } else {
      setProducts(productsList);
    }
  }, [productsList, searchText, categoryFilter]);

  useEffect(() => {
    setCategories(categoriesList);
  }, [categoriesList]);

  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };
  const handleFilter = (e) => {
    if (e.target.checked) {
      categoryFilter.push(e.target.name.toLowerCase());
      setCategoryFilter([...categoryFilter]);
    } else {
      categoryFilter.splice(categoryFilter.indexOf(e.target.name), 1);
      setCategoryFilter([...categoryFilter]);
    }
    console.log(categoryFilter);
  };
  return (
    <Layout>
      <div className="min-h-screen p-20">
        <div className="flex">
          <div className=" w-64 flex-col flex-none max-h-screen min-h-screen p-3 border-r-2 border-gray-300">
            <div className="flex border-1 border-gray-500 bg-gray-100 rounded-lg items-center p-3">
              <FaSearch className="text-gray-800 mr-2" />
              <input
                type="text"
                name="search"
                onChange={handleSearch}
                placeholder="Search Category"
                className=" bg-gray-100 outline-none text-sm flex-1 text-gray-700"
              />
            </div>
            <div className="flex flex-col mt-4">
              {categories &&
                categories.map((category, index) => (
                  <label key={index} className="flex items-center text-sm">
                    <input
                      type="checkbox"
                      name={category.name}
                      className="mr-3 accent-red-500 w-4 h-4"
                      onChange={handleFilter}
                    />
                    <span className=" text-xl">{category.name}</span>
                  </label>
                ))}
            </div>
          </div>
          <div className="flex flex-col flex-auto max-h-screen min-h-screen overflow-y-scroll p-4">
            <form>
              <div className="flex items-center justify-center lg:space-x-3 mb-3">
                <div className=" bg-gray-100 pl-2 flex items-center rounded-lg flex-1 border-2 border-red-500">
                  <input
                    type="text"
                    name="search"
                    onChange={handleSearch}
                    placeholder="Search Product"
                    className=" bg-gray-100 outline-none text-sm flex-1 text-gray-700"
                  />

                  <div className=" flex justify-center items-center  bg-red-500  text-white rounded-tr-md rounded-br-md  py-2 px-5 font-semibold cursor-pointer">
                    <FaSearch className="text-white" />
                  </div>
                </div>
              </div>
            </form>
            <ProductsGrid data={products} grid={4} />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Shops;

export const getStaticProps = async () => {
  return {
    props: {
      productsList: [
        {
          id: 1,
          name: 'product1',
          description: 'Product 1',
          price: 100,
          image: productImage,
          rating: 5,
          category: { id: 1, name: 'Cereals' },
        },
        {
          id: 2,
          name: 'product2',
          description: 'Product 1',
          price: 100,
          image: productImage,
          rating: 4,
          category: { id: 2, name: 'Detergents' },
        },
        {
          id: 3,
          name: 'product3',
          description: 'Product 1',
          price: 100,
          image: productImage,
          rating: 1,
          category: { id: 3, name: 'Biscuits' },
        },
        {
          id: 4,
          name: 'product4',
          description: 'Product 1',
          price: 100,
          image: productImage,
          rating: 2,
          category: { id: 4, name: 'Soups' },
        },
        {
          id: 5,
          name: 'Koko pops',
          description: 'Fancy 30G * 72Pcs',
          price: 1000.0,
          comparePrice: 1500.0,
          image: productImage,
          rating: 4,
          category: { id: 1, name: 'Cereals' },
        },
        {
          id: 6,
          name: 'product1',
          description: 'Product 1',
          price: 100,
          image: productImage,
          rating: 0,
          category: { id: 1, name: 'Cereals' },
        },
        {
          id: 7,
          name: 'product2',
          description: 'Product 1',
          price: 100,
          image: productImage,
          rating: 3,
          category: { id: 2, name: 'Detergents' },
        },
        {
          id: 8,
          name: 'product3',
          description: 'Product 1',
          price: 100,
          image: productImage,
          rating: 5,
          category: { id: 3, name: 'Biscuits' },
        },
        {
          id: 9,
          name: 'product4',
          description: 'Product 1',
          price: 100,
          image: productImage,
          rating: 3,
          category: { id: 4, name: 'Soups' },
        },
        {
          id: 10,
          name: 'Koko pops',
          description: 'Fancy 30G * 72Pcs',
          price: 1000.0,
          comparePrice: 1500.0,
          image: productImage,
          rating: 2,
          category: { id: 1, name: 'Cereals' },
        },
      ],
      categoriesList: [
        { id: 1, name: 'Cereals' },
        { id: 2, name: 'Detergents' },
        { id: 3, name: 'Biscuits' },
        { id: 4, name: 'Soups' },
      ],
    },
  };
};
