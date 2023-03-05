import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Item, Items } from "../types/types";

export const collectionApi = createApi({
  reducerPath: "collectionApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://collectionapi.metmuseum.org/public/collection/v1/",
  }),
  endpoints: (builder) => ({
    getSearchedCollection: builder.query<Items, string>({
      query: (query: string = "") =>
        `search?medium=Sculpture&geoLocation=China&hasImages=true&q="${query}"`,
    }),
    getCollectionItemById: builder.query<Item, number>({
      query: (id: number) => `objects/${id}`,
    }),
  }),
});

export const { useGetSearchedCollectionQuery, useGetCollectionItemByIdQuery } =
  collectionApi;
