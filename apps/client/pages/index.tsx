import { useState, useEffect, useContext } from 'react';
import Categories from '../components/Categories';
import productImage from '../assets/images/pops.png';
import HeroSection from '../components/HeroSection';
import NavBar from '../components/NavBar';
import ProductsGridIndex from '../components/ProductsGridIndex';
import Pagination from '../components/Pagination';
import Layout from '../components/Layout';
import ProductDetail from '../components/ProductDetail';
import { AppContext } from '../context/Provider';
import Offer from '../components/Offer';

export function Index() {
  const [open, setOpen] = useState(false);
  const [product, setProduct] = useState(null);

  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.styled-components file.
   */
  return (
    <Layout>
      <div className="bg-gray-100">
        <ProductDetail open={open} setOpen={setOpen} product={product} />
        <div className="flex w-full h-[500px]">
          <HeroSection />
        </div>
        <div className="lg:container flex flex-col w-full lg:mx-auto pb-20 pt-40">
          <Categories />
          <Offer />
          <ProductsGridIndex
            grid={4}
            setOpen={({ isOpen, product }) => {
              setOpen(isOpen);
              setProduct(product);
            }}
          />
          <Pagination />
        </div>
      </div>
    </Layout>
  );
}

export default Index;
