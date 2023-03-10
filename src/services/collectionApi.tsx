import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Item, ItemDTO, Items } from "../types/types";

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
      transformResponse: (response: ItemDTO) => ({
        id: response.objectID,
        title: response.title,
        medium: response.medium,
        culture: response.culture,
        period: response.period,
        date: response.objectDate,
        country: response.country,
        image: response.primaryImage,
      }),
    }),
  }),
});

export const { useGetSearchedCollectionQuery, useGetCollectionItemByIdQuery } =
  collectionApi;
