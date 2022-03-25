import Layout from '../../components/Layout';
import React from 'react';
import productImage from '../../assets/images/pops.png';
import Image from 'next/image';

function index() {
  return (
    <Layout>
      <div className="container min-h-screen mx-auto pt-32">
        <div className="flex flex-col bg-white">
          <div className="flex p-8">
            <h1 className=" font-bold text-2xl">Favourites</h1>
          </div>
          <div className=" h-1 bg-gray-200"></div>
          <div className="flex flex-col p-8">
            <div className="flex">
              <div className=" h-20 w-20">
                <Image src={productImage} alt="" layout="responsive" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default index;
