import { createSlice } from "@reduxjs/toolkit"
import data from "../assets/data"

const initialState = {
  searchItems: data,
}

export const searchResult = createSlice({
  name: "SearchResults",
  initialState,
  reducers: {
    addSearchProducts: (state, action) => {
      state.searchItems = action.payload
    },
  },
})

export const { addSearchProducts } = searchResult.actions

export default searchResult.reducer
