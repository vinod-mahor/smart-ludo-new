import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    blueToken: [false,false,false,false],
    redToken: [false,false,false,false],
    greenToken: [false,false,false,false],
    yellowToken: [false,false,false,false]
}


const isTokenOnVictoryPathSlice = createSlice({
    name: "victory path token info",
    initialState,
    reducers: {
        setTokenInsideOfVictoryPath: (state, action) => {
            const [tokenColor,tokenNum] = action.payload;
            switch (tokenColor) {
                case "blue":
                        state.blueToken[tokenNum - 1] = true;
                    break;
                case "red":
                    state.redToken[tokenNum - 1] = true;
                    break;
                case "green":
                    state.greenToken[tokenNum - 1] = true;
                    break;
                case "yellow":
                    state.yellowToken[tokenNum - 1] = true;
                    break;            
                default:
                    break;
            }
        },
        setTokenOutsideOfVictoryPath: (state, action) => {
            const [tokenColor,tokenNum] = action.payload;
            switch (tokenColor) {
                case "blue":
                        state.blueToken[tokenNum - 1] = false;
                    break;
                case "red":
                    state.redToken[tokenNum - 1] = false;
                    break;
                case "green":
                    state.greenToken[tokenNum - 1] = false;
                    break;
                case "yellow":
                    state.yellowToken[tokenNum - 1] = false;
                    break;            
                default:
                    break;
            }
        }
    }
})

export default isTokenOnVictoryPathSlice.reducer;
export const {setTokenInsideOfVictoryPath,setTokenOutsideOfVictoryPath} = isTokenOnVictoryPathSlice.actions;