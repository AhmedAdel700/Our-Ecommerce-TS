import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { TProducts } from "@components/types/productsTypes";

type TResponse = TProducts[]; // array of type object

export const actGetProducts = createAsyncThunk(
  "products/getProducts",
  async (prefix: string, thunkApi) => {
    // async function(payload,thunkApi)
    const { rejectWithValue } = thunkApi;

    try {
      const response = await axios.get<TResponse>(
        `http://localhost:5005/products?cat_prefix=${prefix}`
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
