import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {AppResponse} from "../models/app-response.model";
export const ordersApi = createApi({
  reducerPath: 'ordersApi',
  tagTypes: ['Orders'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://nascodirect.net/api/',
    prepareHeaders: (headers, { getState }) => {
      headers.set('Authorization', `Bearer ${localStorage.getItem('token')}`);
      return headers
    }
  }),
  endpoints: (builder) => ({

    getOrders: builder.query<AppResponse, string>({
      query: (id) => `order/orderHistory/${JSON.parse(localStorage.getItem('user'))._id}`,
      providesTags: ['Orders'],
    }),

    createOther: builder.mutation({
      query: (body) => {
        return {
          url: 'order',
          method: 'POST',
          body,
        };
      },
    }),

  }),
});

export const { useGetOrdersQuery, useCreateOtherMutation } = ordersApi;
