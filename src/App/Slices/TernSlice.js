import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    ActiveUser: "rgb(36,113,255)",
    isTernFinished: false,
    currentPlayerIndex: 0
};
const userList = ["rgb(36,113,255)", "red", "green", "yellow"]
const TernSlice = createSlice({
    name: 'Tern',
    initialState,
    reducers: {
        setUserActive: (state, action) => {
            state.ActiveUser = action.payload
        },
        setUserFinishedTern: (state, action) => {
            state.isTernFinished = true;
        },
        resetFinishedTern:(state)=>{
            state.isTernFinished = false;
        }
        ,
        setNextUserActive: (state, action) => {
            if (state.isTernFinished) {
                // Update the current player index before setting the next active user
                state.currentPlayerIndex = (state.currentPlayerIndex + 1) % userList.length;
                // Set the active user based on the updated index
                state.ActiveUser = userList[state.currentPlayerIndex];
                console.log(state.ActiveUser);
                state.isTernFinished = false;
            }else{
                console.log("unable to change tern!")
            }
        }

    }
});

export const { setUserActive, setNextUserActive, setUserFinishedTern,resetFinishedTern } = TernSlice.actions;
export default TernSlice.reducer;

export async function pushToNextTern(dispatch, getState) {
    return function () {
        const state = getState();
        dispatch(setNextUserActive()); // Move to the next player's turn
    };
}