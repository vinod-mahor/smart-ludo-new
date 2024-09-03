import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    blueToken: "locked",
    redToken: "locked",
    greenToken: "locked",
    yellowToken: "locked"
}

const MoveControllerSlice = createSlice({
    name: "moveControl",
    initialState,
    reducers: {
        unLockTern: (state, action) => {
            const [diceColor, diceAction, homeStatus] = action.payload;
            switch (diceColor) {
                case "rgb(36,113,255)":
                    const [firstTokenBlue, secondTokenBlue, thirdTokenBlue, fourthTokeneBlue] = homeStatus.blueToken
                    if ((firstTokenBlue === "inside") && (secondTokenBlue === "inside") && (thirdTokenBlue === "inside") && (fourthTokeneBlue === "inside") && (diceAction !== 6)) {
                        // do nothing
                    } else {
                        if (state.blueToken === "locked") {
                            state.blueToken = "unLocked";
                            // console.log(`${diceColor} has unlocked`);
                        }
                    }

                    break;

                case "red":
                    const [firstTokenRed, secondTokenRed, thirdTokenRed, fourthTokeneRed] = homeStatus.redToken
                    if ((firstTokenRed === "inside") && (secondTokenRed === "inside") && (thirdTokenRed === "inside") && (fourthTokeneRed === "inside") && (diceAction !== 6)) {
                        // do nothing
                    } else {
                        if (state.redToken === "locked") {
                            state.redToken = "unLocked";
                            // console.log(`${diceColor} has unlocked`);
                        }
                    }

                    break;

                case "green":
                    const [firstTokenGreen, secondTokenGreen, thirdTokenGreen, fourthTokeneGreen] = homeStatus.greenToken
                    if ((firstTokenGreen === "inside") && (secondTokenGreen === "inside") && (thirdTokenGreen === "inside") && (fourthTokeneGreen === "inside")&&(diceAction !== 6)) {
                        // do nothing
                    } else {
                        if (state.greenToken === "locked") {
                            state.greenToken = "unLocked";
                            // console.log(`${diceColor} has unlocked`);
                        }
                    }

                    break;

                case "yellow":
                    const [firstTokenYellow, secondTokenYellow, thirdTokenYellow, fourthTokeneYellow] = homeStatus.yellowToken
                    if ((firstTokenYellow === "inside") && (secondTokenYellow === "inside") && (thirdTokenYellow === "inside") && (fourthTokeneYellow === "inside")&&(diceAction !== 6)) {
                        // do nothing
                    } else {
                        if (state.yellowToken === "locked") {
                            state.yellowToken = "unLocked";
                            // console.log(`${diceColor} has unlocked`);
                        }
                    }

                    break;

                default:
                    break;
            }
        },
        lockTern: (state, action) => {
            const tokenColor = action.payload;
            switch (tokenColor) {
                case "rgb(36,113,255)":
                    if (state.blueToken === "unLocked") {
                        state.blueToken = "locked";
                        console.log("the rgb(36,113,255) color locked")
                    }
                    break;

                case "red":
                    if (state.redToken === "unLocked") {
                        state.redToken = "locked";
                        console.log("the red color locked")
                    }
                    break;

                case "green":
                    if (state.greenToken === "unLocked") {
                        state.greenToken = "locked";
                        console.log("the green color locked")
                    }
                    break;

                case "yellow":
                    if (state.yellowToken === "unLocked") {
                        state.yellowToken = "locked";
                        console.log("the yellow color locked")
                    }
                    break;

                default:
                    break;
            }
        }
    }

})


export const { unLockTern, lockTern } = MoveControllerSlice.actions;
export default MoveControllerSlice.reducer;