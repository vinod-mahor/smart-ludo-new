// store.js

import { configureStore } from '@reduxjs/toolkit';
// import lapStateMiddleware from './middleware/lapStateMiddleware.js';
import intervalReducer from './Slices/IntervalSlice.js'
import TernReducer from './Slices/TernSlice.js';
import TokenPositionReducer from '../App/Slices/TokenPositionSlice.js'
import DiceNumberReducer from '../App/Slices/DiceSlice.js'
import MoveControlReducer from '../App/Slices/MoveControllerSlice.js'
import HomeStatusSliceReducer from './Slices/HomeStatusSlice.js';
import AvailableTernSliceReducer from './Slices/AvailableTernSlice.js';
import isTokenOnVictoryPathSlice from './Slices/isTokenOnVictoryPathSlice.js';
import lapStateReducer from './Slices/LapSlice.js';
import isFinishTernReducer from './Slices/isFinishTernSlice.js'
import isTokenWonReducer from './Slices/isTokenWonSlice.js'
import ChangePlayerTernReducer from './Slices/ChangePlayerTern.js';
// import LapSliceReducer from './Slices/LapSlice.js';
const store = configureStore({
    reducer: {
        ternHandler: TernReducer,
        interval: intervalReducer,
        tokenPosition: TokenPositionReducer,
        diceNumber: DiceNumberReducer,
        moveTokenController: MoveControlReducer,
        HomeStatus: HomeStatusSliceReducer,
        availableTern: AvailableTernSliceReducer,
        isTokenOnVictoryPath: isTokenOnVictoryPathSlice,
        lapSlice: lapStateReducer,
        isFinishTern:isFinishTernReducer,
        isTokenWon:isTokenWonReducer,
        changePlayerTern:ChangePlayerTernReducer
    },
    // middleware: getDefaultMiddleware => getDefaultMiddleware().concat(lapStateMiddleware)

});
export default store;
