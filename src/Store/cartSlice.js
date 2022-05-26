import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],

  cartQuantityItems: 0,
  cartTotalPrice: 0,
}

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Add product and add cart quantity items
    // Set data to local storage

    addProduct: (state, action) => {
      state.cartItems.push(action.payload)

      state.cartQuantityItems = state.cartItems.reduce(
        (acc, next) => acc + next.qty,
        0
      )

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
    },

    // Remove product and update cart quantity items
    // Set data wich were updated to local storage

    deleteProduct: (state, action) => {
      // Cart Items
      state.cartItems = state.cartItems.filter(
        (product) => product.id !== action.payload
      )

      // Cart Quantity
      state.cartQuantityItems = state.cartItems.reduce(
        (acc, next) => acc + next.qty,
        0
      )

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
    },

    // Add quantity item
    // Set data wich were updated to local storage

    addQuantityToItem: (state, action) => {
      state.cartItems.forEach((item) => {
        if (item.id === action.payload) {
          item.qty += 1
        }
      })

      state.cartQuantityItems = state.cartItems.reduce(
        (acc, next) => acc + next.qty,
        0
      )

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
    },

    // Substract quantity item
    // Set data wich were updated to local storage

    substractQuantityFromItem: (state, action) => {
      state.cartItems.forEach((item) => {
        if (item.id === action.payload) {
          item.qty < 2 ? (item.qty = 1) : (item.qty -= 1)
        }
      })

      const currentQuan = (state.cartQuantityItems = state.cartItems.reduce(
        (acc, next) => acc + next.qty,
        0
      ))

      if (state.cartQuantityItems === currentQuan) {
        state.cartQuantityItems = state.cartItems.reduce(
          (acc, next) => acc + next.qty,
          0
        )
      } else {
        state.cartQuantityItems -= 1
      }

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
    },

    addCartTotalPrice: (state, action) => {
      state.cartTotalPrice = action.payload
    },
  },
})

export const {
  addProduct,
  deleteProduct,
  addQuantityToItem,
  substractQuantityFromItem,
  addCartTotalPrice,
} = cartSlice.actions

export default cartSlice.reducer
