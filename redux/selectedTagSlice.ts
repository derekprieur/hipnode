import { createSlice } from "@reduxjs/toolkit";

export const selectedTagSlice = createSlice({
    name: "selectedTag",
    initialState: {
        value: "",
    },
    reducers: {
        setSelectedTag: (state, action) => {
            state.value = action.payload;
        }
    }
});

export const { setSelectedTag } = selectedTagSlice.actions;

export default selectedTagSlice.reducer;