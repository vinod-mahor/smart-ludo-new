import { createSlice } from "@reduxjs/toolkit";


// Initial state
const initialState = {
    currentPlayer: 1, // Assuming 0 is the first player, 1 is the second, etc.
    playerMoved: false, // This will track if the current player has moved
};

const ChangePlayerTern = createSlice({
    name: 'change player tern',
    initialState,
    reducers: {
        movePlayer(state, action) {
            state.playerMoved = true; // Set to true when a player moves
        },
        nextTurn(state) {
            state.currentPlayer = (state.currentPlayer) % 4; // Move to next player
            state.playerMoved = false; // Reset the playerMoved state for the next player
            console.log(state)
        },
    },
});

export const { movePlayer, nextTurn } = ChangePlayerTern.actions;
export default ChangePlayerTern.reducer;

// The handlePlayerTurn function
export async function handlePlayerTurn(dispatch, getState) {
    return function () {
        const state = getState();
        if (state.changePlayerTern.playerMoved) {
            dispatch(nextTurn()); // Move to the next player's turn
        } else {
            console.log("Player hasn't moved yet!");
        }
    };
}
