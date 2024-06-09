import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { TCategory } from "@components/types/categoryTypes";

type TResponse = TCategory[]; // array of type object


export const actGetCategories = createAsyncThunk(
  "categories/getCategories",
  async (_, thunkApi) => {
    // async function(payload,thunkApi)
    const { rejectWithValue } = thunkApi;

    try {
      const response = await axios.get<TResponse>(
        "http://localhost:5005/categories"
      );
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        // means if this error axios can understand it do this ....
        return rejectWithValue(error.response?.data.message || error.message);
      } else {
        return rejectWithValue("An Expected Error");
      }
    }
  }
);
