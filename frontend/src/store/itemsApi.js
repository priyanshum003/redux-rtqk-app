import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

//  base URL of the server
const server =  import.meta.env.VITE_SERVER_URL || "http://localhost:5000";

// Create an API slice using RTK Query
export const itemsApi = createApi({
    // The reducerPath defines the name of the slice in the store
    reducerPath: "itemsApi",

    // The base query that will be used for all endpoints
    baseQuery: fetchBaseQuery({ baseUrl: server }),

    // Define tag types for caching and invalidation
    tagTypes: ['Item'],

    // Define the endpoints (queries and mutations)
    endpoints: (builder) => ({
        // Define a query to get all items
        getItems: builder.query({
            // The URL for the query
            query: () => "/items",
            // Tags that this query provides
            // This helps in invalidating and refetching when the tag is invalidated
            providesTags: ['Item'],
        }),

        // Define a mutation to add a new item
        addItem: builder.mutation({
            // The URL, method, and body for the mutation
            query: (newItem) => ({
                url: "/items",
                method: "POST",
                body: newItem
            }),
            // Invalidate the 'Item' tag after this mutation
            // This ensures the getItems query is refetched
            invalidatesTags: ['Item'],
        }),

        // Define a mutation to delete an item
        deleteItem: builder.mutation({
            // The URL and method for the mutation
            // It takes the item ID as a parameter
            query: (id) => ({
                url: `/items/${id}`,
                method: "DELETE"
            }),
            // Invalidate the 'Item' tag after this mutation
            // This ensures the getItems query is refetched
            invalidatesTags: ['Item'],
        }),
    }),
});

// Export hooks for using the queries and mutations in components
export const { useGetItemsQuery, useAddItemMutation, useDeleteItemMutation } = itemsApi;
