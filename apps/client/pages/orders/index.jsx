import OrderItem from '../../components/OrderItem';
import React from 'react';
import Layout from '../../components/Layout';
import OrderCard from '../../components/OrderCard';

function Orders() {
  return (
    <Layout>
      <div className="container min-h-screen mx-auto p-32">
        <div className="flex items-center space-x-6 mb-8">
          <h1 className="text-2xl font-bold">My Orders</h1>
          <p className=" text-gray-500">
            View and confirmed all your pending, delivered and returned orders
            here.
          </p>
        </div>
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
      </div>
    </Layout>
  );
}

export default Orders;
