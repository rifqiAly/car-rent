import { configureStore } from "@reduxjs/toolkit";
import contactSlice from "./contact-slice";

const store = configureStore({
    reducer: {
        car: contactSlice.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: false,
        }),
})

export default store