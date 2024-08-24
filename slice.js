
import { createSlice } from '@reduxjs/toolkit';

const dataSlice = createSlice({
  name: 'data',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
    filteredItems: [],
    filter: '',
    itemDetails: null, 
    detailsStatus: 'idle',
    detailsError: null,
  },


  reducers: {
    fetchDataStart(state) {
      state.status = 'loading';
    },
    fetchDataSuccess(state, action) {
      state.status = 'succeeded';
      state.items = action.payload;
    },
    fetchDataFailure(state, action) {
      state.status = 'failed';
      state.error = action.payload;
    },

    setFilter(state, action) {
        state.filter = action.payload;
        state.filteredItems = state.items.filter(item =>
          item.name.toLowerCase().includes(action.payload.toLowerCase())
        );
      },
      fetchItemDetailsStart(state) {
        state.detailsStatus = 'loading';
      },
      fetchItemDetailsSuccess(state, action) {
        state.detailsStatus = 'succeeded';
        state.itemDetails = action.payload;
      },
      fetchItemDetailsFailure(state, action) {
        state.detailsStatus = 'failed';
        state.detailsError = action.payload;
      },
      clearItemDetails(state) {
        state.itemDetails = null;
        state.detailsStatus = 'idle';
        state.detailsError = null;
      },
  },
});

export const { fetchDataStart, fetchDataSuccess, fetchDataFailure, setFilter, fetchItemDetailsStart,fetchItemDetailsSuccess,fetchItemDetailsFailure,  clearItemDetails} = dataSlice.actions;

export default dataSlice.reducer;
