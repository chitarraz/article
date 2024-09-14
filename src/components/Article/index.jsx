import { createSlice } from "@reduxjs/toolkit";

// initial state
const initialState = {
  article: {},
};

// create reducer and action creators
const article = createSlice({
  name: "article",
  initialState,
  reducers: {
    setValues: (state, action) => {
      Object.keys(action.payload).forEach((key) => {
        state[key] = action.payload[key];
      })
    },
    reset: () => initialState,
  },
});

// export actions
export const { setValues, reset } = article.actions;

// export the reducer
export default article.reducer;