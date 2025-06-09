import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value:false,
    id: null
}
export const categoriesButtonSlice = createSlice({
    name: 'categoriesButton',
    initialState,
    reducers: {
        entering: (state)=> {
            state.value = true
        },
        leaving: (state)=> {
            state.value = false
        }
    }
})


export const {entering, leaving} = categoriesButtonSlice.actions;
export default categoriesButtonSlice.reducer