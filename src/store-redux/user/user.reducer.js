import { USER_ACTION_TYPES } from './user.type';

export const initialState = {
    currentUser: null,
    isLoading: false,
    error: null,
};

export const userReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch(type) {
        case USER_ACTION_TYPES.SING_IN_SUCCESS:
            return { ...state, currentUser: payload };
        case USER_ACTION_TYPES.SIGN_OUT_SUCCESS:
            return { ...state, currentUser: null }
        case USER_ACTION_TYPES.SIGN_IN_FAILED:
            return { ...state, error: payload };
        case USER_ACTION_TYPES.SIGN_UP_FAILED:
            return { ...state, error: payload };
        case USER_ACTION_TYPES.SIGN_OUT_FAILED:
            return { ...state, error: payload };
        default: return state;
    }
}
