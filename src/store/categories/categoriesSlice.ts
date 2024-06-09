import { createSlice } from "@reduxjs/toolkit";
import { actGetCategories } from "./act/actGetCategories";
import { TLoading } from "@components/types/shardTypes";
import { TCategory } from "@components/types/categoryTypes";

export interface ICategoriesState {
  // انا كتبت اى فى الاول و عملت اول حرف كابيتال علشان معظم الناس بتعمل كدة بس عادى لو كتبت كمل كايس
  records: TCategory[]; // array of type object
  loading: TLoading; // Literal Types
  error: string | null;
}

const initialState: ICategoriesState = {
  records: [],
  loading: "idle",
  error: null,
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(actGetCategories.pending, (state) => {
        state.loading = "pending";
        state.error = null;
      })
      .addCase(actGetCategories.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.records = action.payload;
      })
      .addCase(actGetCategories.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.payload as string; // casting يعنى انا عارف نوع الداتا الى جاية
      });
  },
});

export default categoriesSlice.reducer;
