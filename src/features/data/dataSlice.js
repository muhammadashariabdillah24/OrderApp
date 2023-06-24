import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import {API_URL} from '../../config/API_URL';

export const fetchData = createAsyncThunk('data/fetchData', async () => {
  const response = await axios.get(`${API_URL}/api/random`);
  return response.data;
});

const initialState = {
  dataIsLoading: false,
  data: '',
  error: null,
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchData.pending, state => {
      state.dataIsLoading = true;
    });
    builder.addCase(fetchData.fulfilled, (state, action) => {
      const {anime} = action.payload;
      state.data = anime;
      state.dataIsLoading = false;
    });
    builder.addCase(fetchData.rejected, state => {
      state.dataIsLoading = false;
      state.error = action.error.message;
    });
  },
});

export default dataSlice.reducer;
