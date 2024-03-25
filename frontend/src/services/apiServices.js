import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const bookStoreApi = createApi({
  reducerPath: "bookStoreApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/api/v1/" }),
  endpoints: (builder) => ({
    // User Api's
    registerUser: builder.mutation({
      query: (payload) => ({
        url: "/user/register",
        method: "POST",
        body: payload,
      }),
    }),
    loginUser: builder.mutation({
      query: (payload) => ({
        url: "/user/login",
        method: "POST",
        body: payload,
      }),
    }),
    // Books Api's
    getBooks: builder.query({
      query: ({ pageSize, page, searchTerm, filterGenre }) =>
        `book/get/?pageSize=${pageSize}&page=${page}&title=${searchTerm}&genre=${filterGenre}`,
    }),
    getBookById: builder.query({
      query: (bookId) => `book/get/${bookId}/`,
    }),
  }),
});

export const {
  useRegisterUserMutation,
  useLoginUserMutation,
  useGetBooksQuery,
  useGetBookByIdQuery,
} = bookStoreApi;
