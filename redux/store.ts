import { configureStore } from '@reduxjs/toolkit';
import postReducer from './createPostSlice';
import searchValueReducer from './searchValueSlice';

export const store = configureStore({
  reducer: {
    post: postReducer,
    searchValue: searchValueReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;