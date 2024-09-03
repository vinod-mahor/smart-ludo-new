import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    blueToken: 1,
    redToken: 0,
    greenToken: 0,
    yellowToken: 0,
}

const AvailableTernSlice = createSlice({
    name: "available terns",
    initialState,
    reducers: {
        addAvailableTern: (state, action) => {
            switch (action.payload) {
                case "rgb(36,113,255)":
                    state.blueToken++;
                    break;
                case "red":
                    state.redToken++;
                    break;
                case "green":
                    state.greenToken++;
                    break;
                case "yellow":
                    state.yellowToken++;
                    break;
                default:
                    break;
            }
        },
        removeAvailableTern: (state, action) => {
            switch (action.payload) {
                case "rgb(36,113,255)":
                    state.blueToken--;
                    break;
                case "red":
                    state.redToken--;
                    break;
                case "green":
                    state.greenToken--;
                    break;
                case "yellow":
                    state.yellowToken--;
                    break;
                default:
                    break;
            }
        }
    }
})

export const { addAvailableTern, removeAvailableTern } = AvailableTernSlice.actions;
export default AvailableTernSlice.reducer