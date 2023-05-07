import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCheat = createAsyncThunk("cheat/fetchCheatStatus", async (params) => {
    const { currentPage, category, sortBy, order, search } = params;
    const { data } = await axios.get(
      `https://644ea5454e86e9a4d8fe278b.mockapi.io/data?page=${currentPage}&limit=12&${category}&sortBy=${sortBy}&order=${order}${search}`
    );
    return data;
  }
);

const initialState = {
  items: [],
  status: 'loading',
};

const cheatSlice = createSlice({
  name: "cheat",
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },
  extraReducers: {
    [fetchCheat.pending]: (state) => {
      state.status = 'loading';
      state.items = [];
    },
    [fetchCheat.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = 'success';
    },
    [fetchCheat.rejected]: (state) => {
      state.status = 'error';
      state.items = [];
    },
  },
});

export const { setItems } = cheatSlice.actions;

export default cheatSlice.reducer;
