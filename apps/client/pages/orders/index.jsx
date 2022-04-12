import React, {useEffect} from 'react';
import Layout from '../../components/Layout';
import OrderCard from '../../components/OrderCard';
import { useGetOrdersQuery } from '../../services/orders';


function Orders() {

  const { data,  isLoading, isError, isSuccess } =
    useGetOrdersQuery();

  useEffect(()=>{
    console.log(data);
  }, [data]);

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

        {isLoading && <div>Loading...</div>}
        {isError && <div>No Orders found</div>}
        {isSuccess && data && data.data.map(order => (
          <OrderCard key={order._id} order={order} />
        ))}

      </div>
    </Layout>
  );
}

export default Orders;
