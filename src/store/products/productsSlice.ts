import { createSlice } from "@reduxjs/toolkit";
import { actGetProducts } from "./act/actGetProduct";
import { TLoading } from "@components/types/shardTypes";
import { TProducts } from "@components/types/productsTypes";

interface ICategoriesState {
  records: TProducts[];
  loading: TLoading;
  error: string | null;
}

const initialState: ICategoriesState = {
  records: [],
  loading: "idle",
  error: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    cleanUp: (state) => {
      state.records = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(actGetProducts.pending, (state) => {
        state.loading = "pending";
        state.error = null;
      })
      .addCase(actGetProducts.fulfilled, (state, action) => {
        state.records = action.payload;
        state.loading = "succeeded";
      })
      .addCase(actGetProducts.rejected, (state, action) => {
        state.loading = "failed";
        if (action.payload && action.payload === "string") {
          state.error = action.payload;
        }
      });
  },
});

export const { cleanUp } = productsSlice.actions;
export default productsSlice.reducer;
