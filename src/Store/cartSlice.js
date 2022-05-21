import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
}

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.cartItems.push(action.payload)
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
    },
    deleteProduct: (state, action) => {
      state.cartItems.filter((product) => action.payload !== product.id)
    },
  },
})

export const { addProduct, deleteProduct } = cartSlice.actions
export default cartSlice.reducer
