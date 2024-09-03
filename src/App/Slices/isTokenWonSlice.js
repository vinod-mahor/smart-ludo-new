import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    blueToken: [false, false, false, false],
    redToken: [false, false, false, false],
    greenToken: [false, false, false, false],
    yellowToken: [false, false, false, false],
};

const isTokenWonSlice = createSlice({
    name: 'Won Tokens',
    initialState,
    reducers: {
        setTokenWon: (state, action) => {
            const [tokenColor, tokenNum] = action.payload;
            switch (tokenColor) {
                case "rgb(36,113,255)":
                    state.blueToken[tokenNum - 1] = true
                    break;
                case "red":
                    state.redToken[tokenNum - 1] = true
                    break;
                case "green":
                    state.redToken[tokenNum - 1] = true
                    break;
                case "yellow":
                    state.redToken[tokenNum - 1] = true
                    break;
                default:
                    break;
            }
        }
    }
});

export const { setTokenWon } = isTokenWonSlice.actions;
export default isTokenWonSlice.reducer;
