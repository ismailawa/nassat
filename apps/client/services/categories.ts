import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {AppResponse} from "../models/app-response.model";
export const categoriesApi = createApi({
  reducerPath: 'categoriesApi',
  tagTypes: ['Categories'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://nascodirect.net/api/',
    prepareHeaders: (headers, { getState }) => {
      headers.set('Authorization', `Bearer ${localStorage.getItem('token')}`);
      return headers
    }
  }),
  endpoints: (builder) => ({
    getCategories: builder.query<AppResponse, void>({
      query: () => `category`,
      providesTags: ['Categories'],
    }),

  }),
});

export const { useGetCategoriesQuery } = categoriesApi;
