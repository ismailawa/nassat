import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { AppResponse } from '../models/app-response.model';

export const productsApi = createApi({
  reducerPath: 'productsApi',
  tagTypes: ['Products'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://nascodirect.net/api/',
  }),
  endpoints: (builder) => ({
    getProducts: builder.query<AppResponse, void>({
      query: () => `product`,
      providesTags: ['Products'],
    }),
    getProductById: builder.query({
      query: (id) => `product/${id}`,
      providesTags: ['Products'],
    }),
  }),
});

export const { useGetProductsQuery } = productsApi;
