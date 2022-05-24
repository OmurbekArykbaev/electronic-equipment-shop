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

      // state.cartTotalPrice += state.cartItems.reduce(
      //   (acc, next) => acc + +next.price,
      //   0
      // )

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

      // Cart Total Price
      // state.cartTotalPrice = state.cartItems.reduce(
      //   (acc, next) => acc + +next.price,
      //   0
      // )

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

      // state.cartTotalPrice += state.cartItems.reduce(
      //   (acc, next) => acc + +next.price,
      //   0
      // )

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

      // const currentTotalPrice = state.cartTotalPrice

      // state.cartItems.forEach((item) => {
      //   if (item.id === action.payload) {
      //     // Substract Total Price
      //     if (state.cartTotalPrice <= currentTotalPrice) {
      //       state.cartTotalPrice = +item.price
      //     } else {
      //       state.cartTotalPrice = +item.price
      //     }
      //   }
      // })

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

    countTotalPrice: (state, action) => {
      state.cartTotalPrice = action.payload
    },
    addTotalPrice: (state, action) => {
      state.cartTotalPrice += action.payload
    },

    substractTotalPrice: (state, action) => {
      if (state.cartTotalPrice <= action.payload) {
        state.cartTotalPrice = action.payload
      } else {
        state.cartTotalPrice -= action.payload
      }
    },
    removeTotalPrice: (state, action) => {
      if (state.cartTotalPrice <= 0) {
        state.cartTotalPrice = action.payload
      } else {
        state.cartTotalPrice = 0
      }
    },
  },
})

export const {
  addProduct,
  deleteProduct,
  addQuantityToItem,
  substractQuantityFromItem,
  countTotalPrice,
  addTotalPrice,
  substractTotalPrice,
  removeTotalPrice,
} = cartSlice.actions
export default cartSlice.reducer
