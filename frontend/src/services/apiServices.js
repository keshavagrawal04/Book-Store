import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const bookStoreApi = createApi({
  reducerPath: "bookStoreApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/api/v1/" }),
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: ({ pageSize, page, searchTerm, filterGenre }) =>
        `book/get/?pageSize=${pageSize}&page=${page}&title=${searchTerm}&genre=${filterGenre}`,
    }),
    getBookById: builder.query({
      query: (bookId) => `book/get/${bookId}/`,
    }),
  }),
});

export const { useGetBooksQuery, useGetBookByIdQuery } = bookStoreApi;
