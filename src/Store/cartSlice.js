import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  cartQuantityItems: 0,
}

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.cartItems.push(action.payload)
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
      state.cartQuantityItems = state.cartItems.reduce(
        (acc, next) => acc + +next.price,
        0
      )
    },

    deleteProduct: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (product) => product.id !== action.payload
      )
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
    },

    addQuantityToItem: (state, action) => {
      state.cartItems.forEach((item) => {
        if (item.id === action.payload) {
          item.qty += 1
        }
      })

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
    },

    substractQuantityFromItem: (state, action) => {
      state.cartItems.forEach((item) => {
        if (item.id === action.payload) {
          item.qty < 2 ? (item.qty = 1) : (item.qty -= 1)
        }
      })
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
    },
  },
})

export const {
  addProduct,
  deleteProduct,
  addQuantityToItem,
  substractQuantityFromItem,
} = cartSlice.actions
export default cartSlice.reducer
