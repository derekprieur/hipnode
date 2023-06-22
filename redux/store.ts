import { configureStore } from '@reduxjs/toolkit';
import postReducer from './createPostSlice';
import searchValueReducer from './searchValueSlice';
import selectedTagReducer from './selectedTagSlice';
import newMessageReducer from './newMessageSlice';

export const store = configureStore({
  reducer: {
    post: postReducer,
    searchValue: searchValueReducer,
    selectedTag: selectedTagReducer,
    newMessage: newMessageReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;