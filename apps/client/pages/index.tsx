import { useState, useEffect } from 'react';
import Categories from '../components/Categories';
import productImage from '../assets/images/pops.png';
import HeroSection from '../components/HeroSection';
import NavBar from '../components/NavBar';
import ProductsGrid from '../components/ProductsGrid';
import Pagination from '../components/Pagination';
import Layout from '../components/Layout';

export function Index({ productsList }) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setProducts(productsList);
  }, [productsList]);

  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.styled-components file.
   */
  return (
    <Layout>
      <div className="bg-gray-100">
        <HeroSection />
        <div className="lg:container w-full lg:mx-auto pb-20">
          <Categories />
          <ProductsGrid data={products} grid={5} />
          <Pagination />
        </div>
      </div>
    </Layout>
  );
}

export default Index;

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
