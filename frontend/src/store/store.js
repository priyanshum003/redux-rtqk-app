// Import the configureStore function from Redux Toolkit
import { configureStore } from '@reduxjs/toolkit';
// Import the API slice we created
import { itemsApi } from "./itemsApi";

// Configure the Redux store
export const store = configureStore({
    // Add the itemsApi reducer to the store
    // [itemsApi.reducerPath] dynamically sets the key using the reducerPath from the API slice
    reducer: {
        [itemsApi.reducerPath]: itemsApi.reducer,
    },
    // Add the API middleware to the store
    // This ensures that the API middleware is included along with any default middleware
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(itemsApi.middleware),
});

// Export RootState type for use in TypeScript (if using TypeScript)
export const RootState = store.getState;

// Export AppDispatch type for use in TypeScript (if using TypeScript)
export const AppDispatch = store.dispatch;
