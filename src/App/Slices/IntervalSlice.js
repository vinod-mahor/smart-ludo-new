import { createSlice } from '@reduxjs/toolkit';

const intervalSlice = createSlice({
    name: 'interval',
    initialState: {
        changeColorInterval: null,
    },
    reducers: {
        setChangeColorInterval: (state, action) => {
            state.changeColorInterval = action.payload;
        },
        clearChangeColorInterval: (state,ation) => {
            state.changeColorInterval && clearInterval(state.changeColorInterval);
            state.changeColorInterval = null;
        }
    }
});

export const { setChangeColorInterval, clearChangeColorInterval } = intervalSlice.actions;

export default intervalSlice.reducer;
