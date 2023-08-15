import { configureStore } from "@reduxjs/toolkit";
import darkModeSlice from "./features/darkMode/darkModeSlice";

const store = configureStore({
    reducer:{
        darkMode: darkModeSlice,
    },
})


export default store;