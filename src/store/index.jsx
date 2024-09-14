import { configureStore } from '@reduxjs/toolkit';
import articleReducer from "../components/Article"
import generalReducer from './general';

const store = configureStore({
  reducer: {
    general: generalReducer,
    article: articleReducer
  }
})

export default store