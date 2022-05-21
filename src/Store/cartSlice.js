import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialState = {
  cart: [],
}

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.cart.push(action.payload)
    },
    deleteProduct: (state, action) => {
      state.cart.filter((product) => action.payload !== product.id)
    },
  },
})

export const { addProduct, deleteProduct } = cartSlice.actions
export default cartSlice.reducer
