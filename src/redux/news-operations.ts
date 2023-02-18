import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_API_URL;
console.log(process.env);

const fetchNews = createAsyncThunk(
  'fetchCards',
  async (_arg, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/v3/articles`);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

const operations = {
  fetchNews,
};

export default operations;
