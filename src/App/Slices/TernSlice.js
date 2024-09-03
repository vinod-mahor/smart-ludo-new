import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    ActiveUser: "rgb(36,113,255)"
};

const TernSlice = createSlice({
    name: 'Tern',
    initialState,
    reducers: {
        setUserActive: (state, action) => {
            state.ActiveUser = action.payload
        }
    }
});

export const { setUserActive } = TernSlice.actions;
export default TernSlice.reducer;
