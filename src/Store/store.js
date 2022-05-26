import { configureStore } from "@reduxjs/toolkit"
import cartReducer from "./cartSlice"
import searchResultSlice from "./searchResultSlice"

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    search: searchResultSlice,
  },
})
