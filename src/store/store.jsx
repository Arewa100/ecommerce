import { configureStore } from "@reduxjs/toolkit"
import { setupListeners } from "@reduxjs/toolkit/query"
import categoriesButtonReducer from "../features/CategoriesButtonSlice"

export const store = configureStore({
    reducer: {
        categoriesButton: categoriesButtonReducer,
    }

})


setupListeners(store.dispatch)

