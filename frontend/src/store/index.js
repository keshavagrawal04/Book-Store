import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { bookStoreApi } from "../services/apiServices";

const store = configureStore({
  reducer: { [bookStoreApi.reducerPath]: bookStoreApi.reducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(bookStoreApi.middleware),
});

setupListeners(store.dispatch);

export default store;
