import React from 'react';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
function Product() {
  const router = useRouter();
  const { id } = router.query;
  console.log(id);
  return (
    <Layout>
      <div className="container min-h-screen mx-auto pt-20">Product</div>
    </Layout>
  );
}

export default Product;
