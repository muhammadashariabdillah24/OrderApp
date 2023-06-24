import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import {API_URL} from '../../config/API_URL';

export const generateToken = createAsyncThunk('generateToken', async () => {
  const response = await axios.get(`${API_URL}/token`);
  const {data} = response;
  return data;
});

export const listOrder = createAsyncThunk('listOrder', async () => {
  const response = await axios.get(`${API_URL}/Order/GetOrderList`);
  const {data} = response;
  return data;
});

export const listItems = createAsyncThunk('listItems', async () => {
  const response = await axios.get(`${API_URL}/Order/GetItems`);
  const {data} = response;
  return data;
});

export const createNewItem = createAsyncThunk('createNewItem', async () => {
  const response = await axios.post(`${API_URL}/Order/CreateItem`);
  const {data} = response;
  return data;
});

export const updateItem = createAsyncThunk('updateItem', async () => {
  const response = await axios.post(`${API_URL}/Order/UpdateItem`);
  const {data} = response;
  return data;
});

export const deleteItem = createAsyncThunk('deleteItem', async () => {
  const response = await axios.post(`${API_URL}/Order/DeleteItem`);
  const {data} = response;
  return data;
});

const initialState = {
  isLoading: false,
  error: null,
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase();
  },
});
