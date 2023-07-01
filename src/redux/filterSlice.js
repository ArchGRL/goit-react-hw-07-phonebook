import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    setFilter: (state, action) => {
      return action.payload;
    },
    resetFilter: (state) => {
      return '';
    },
  },
});

export const { setFilter, resetFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;