import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    theme: localStorage.getItem("theme") ? localStorage.getItem("theme") : "system"
}
const darkModeSlice = createSlice({
    name: 'darkMode',
    initialState,
    reducers: {
        setTheme: (state, action) => {
            state.theme = action.payload;
            console.log(action.payload);
        }
    }
})

export const {setTheme} = darkModeSlice.actions;
export default darkModeSlice.reducer;