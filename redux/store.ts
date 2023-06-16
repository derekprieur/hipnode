import { configureStore } from '@reduxjs/toolkit';
import postReducer from './createPostSlice';
import searchValueReducer from './searchValueSlice';
import selectedTagReducer from './selectedTagSlice';

export const store = configureStore({
  reducer: {
    post: postReducer,
    searchValue: searchValueReducer,
    selectedTag: selectedTagReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;