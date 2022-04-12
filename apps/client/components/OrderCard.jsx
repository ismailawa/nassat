import React from 'react';
import OrderItem from './OrderItem';

function OrderCard({ order }) {
  return (
    <div className="flex flex-col shadow bg-white p-8 mb-10">
      <div className="flex items-center justify-between flex-1 mb-6">
        <di className="flex space-x-6 items-center">
          <di className="flex bg-gray-200 rounded-full py-2 px-6 items-center justify-center">
            <h1 className="text-sm font-semibold mr-3">Order</h1>
            <h1 className="text-sm font-semibold text-red-500">
              #{order.orderNumber}
            </h1>
          </di>
          <div className=" text-gray-400">
            Order placed:{' '}
            <span className="text-sm font-semibold">{order.createdAt}</span>
          </div>
        </di>
        <div className="flex items-center justify-center bg-red-500 rounded-full text-white px-4 py-2 shadow-sm">
          {order.status}
        </div>
      </div>
      <div className="h-1 bg-gray-100"></div>

        {order.items.map((item) => (
          <OrderItem key={item._id} item={item} status={order.status} delivered={order.delivered} />
        ))}

      <div className="h-1 bg-gray-100"></div>
      <div className="flex items-center justify-between flex-1 mt-6">
        <h1 className="text-gray-600 text-2xl font-bold">Total:</h1>
        <h1 className="text-2xl text-red-500">
          ₦
          {(order.total).toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </h1>
      </div>
    </div>
  );
}

export default OrderCard;
