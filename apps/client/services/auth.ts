import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'authApi',
  tagTypes: ['user'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://nascodirect.net/api/',
  }),
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (body) => {
        return {
          url: 'user/register',
          method: 'POST',
          body,
        };
      },
    }),
    loginUser: builder.mutation({
      query: (body) => {
        return {
          url: 'user/login',
          method: 'POST',
          body,
        };
      },
    }),
  }),
});

export const { useRegisterUserMutation, useLoginUserMutation } = authApi;
