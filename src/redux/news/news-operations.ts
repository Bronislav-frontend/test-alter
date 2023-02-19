import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

const fetchNews = createAsyncThunk(
  'fetchNews',
  async (_arg, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `news?apikey=${process.env.REACT_APP_API_KEY}&country=ua,gb`,
      );
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

const fetchNextPageNews = createAsyncThunk(
  'fetchNextPageNews',
  async (url: string, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `news?apikey=${process.env.REACT_APP_API_KEY}&country=ua,gb&page=${url}`,
      );
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

const operations = {
  fetchNews,
  fetchNextPageNews,
};

export default operations;
