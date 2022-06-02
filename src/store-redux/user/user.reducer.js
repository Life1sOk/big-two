// import { createSlice } from '@reduxjs/toolkit';

import { USER_ACTION_TYPES } from './user.type';
// const userSlice = createSlice({
//     name: 'user',
//     initialState: null,
//     reducers: {
//         setCurrentUser(state, action) {
//             const { payload } = action;
//             return state = payload;
//         }
//     }
// })

// export const { setCurrentUser } = userSlice.actions;
// export default userSlice.reducer;



export const initialState = {
    currentUser: null,
};

export const userReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch(type) {
        case USER_ACTION_TYPES.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: payload,
            }
        default: return state;
    }
}