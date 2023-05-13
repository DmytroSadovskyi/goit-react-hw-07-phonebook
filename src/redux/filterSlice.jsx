import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = { value: '' };

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    updateFilter(state, action) {
      state.value = action.payload;
    },
  },
});

export const { updateFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
