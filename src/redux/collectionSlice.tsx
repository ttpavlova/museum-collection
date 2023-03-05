import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { RootState } from "./store";
import { Item } from "../types/types";

interface CollectionState {
  collection: any[];
  status: "idle" | "pending" | "succeeded" | "failed";
}

const initialState: CollectionState = {
  collection: [],
  status: "idle",
};

export const fetchCollection = createAsyncThunk(
  "collection/fetchCollection",
  async () => {
    const response = await fetch(
      `https://collectionapi.metmuseum.org/public/collection/v1/search?medium=Sculpture&geoLocation=China&hasImages=true&q=""`
    );
    const json = await response.json();
    const firstTenIDs = json.objectIDs.slice(0, 10);
    const responses = await Promise.all(
      firstTenIDs.map((id: number) =>
        fetch(
          `https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`
        )
      )
    );
    const items = await Promise.all(
      responses.map((response) => response.json())
    );

    return items as Item[];
  }
);

export const collectionSlice = createSlice({
  name: "collection",
  initialState,
  reducers: {
    removeCollection: (state) => {
      state.collection = initialState.collection;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCollection.pending, (state) => {
        state.status = "pending";
      })
      .addCase(fetchCollection.fulfilled, (state, action) => {
        state.status = "idle";
        state.collection = action.payload;
      });
  },
});

export const selectCollection = (state: RootState) =>
  state.collection.collection;

export default collectionSlice.reducer;
