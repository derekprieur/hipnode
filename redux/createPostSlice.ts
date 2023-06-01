import { createSlice } from '@reduxjs/toolkit';

export const createPostSlice = createSlice({
  name: 'post',
  initialState: {
    title: '',
  },
  reducers: {
    setTitle: (state, action) => {
      state.title = action.payload;
    },
  },
});

export const { setTitle } = createPostSlice.actions;

export default createPostSlice.reducer;
