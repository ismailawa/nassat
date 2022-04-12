import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {AppResponse} from "../models/app-response.model";

export const offerApi = createApi({
  reducerPath: 'offerApi',
  tagTypes: ['Offer'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://nascodirect.net/api/',
    prepareHeaders: (headers, { getState }) => {
      headers.set('Authorization', `Bearer ${localStorage.getItem('token')}`);
      return headers
    }
  }),
  endpoints: (builder) => ({
    getOffer: builder.query<AppResponse, void>({
      query: () => `offer`,
      providesTags: ['Offer'],
    }),
  }),
});

export const { useGetOfferQuery } = offerApi;
