// import { takeTokenOnVictoryPath } from "../Slices/TokenPositionSlice";

// const lapStateMiddleware = store => next => action => {
    
//     if (action.type === "tokenPosition/takeTokenOnVictoryPath") {
//         const result = next(action);
        
//         // Using a closure to capture the updated state
//         let unsubscribe = store.subscribe(() => {
//             const updatedState = store.getState();
//             const newState = updatedState.lapSlice;
       
            
//         });
//         unsubscribe();
//         return result;
//     }
    
//     return next(action);
// };

// export default lapStateMiddleware;
