import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    blueToken: true,
    redToken: true,
    greenToken: true,
    yellowToken: true
}

const isFinishTernSlice = createSlice({
    name: "finish tern",
    initialState,
    reducers: {
        setTernFinished: (state, action) => {
            switch (action.payload) {
                case "rgb(36,113,255)":
                    state.blueToken = true;
                    break;
                case "red":
                    state.redToken = true;
                    break;
                case "green":
                    state.greenToken = true;
                    break;
                case "yellow":
                    state.yellowToken = true;
                    break;

                default:
                    break;
            }
        },
        removeTernFinished: (state, action) => {
            // console.log("removeTernFinished")
            switch (action.payload) {
                case "rgb(36,113,255)":
                    state.blueToken = false;
                    break;
                case "red":
                    state.redToken = false;
                    break;
                case "green":
                    state.greenToken = false;
                    break;
                case "yellow":
                    state.yellowToken = false;
                    break;
                default:
                    console.log("breaked by default")
                    break;
            }
        }
    }
});

export const { setTernFinished, removeTernFinished } = isFinishTernSlice.actions;
export default isFinishTernSlice.reducer

