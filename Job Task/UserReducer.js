import { USER_REGISTER_SUCCESS, USER_LOGIN_SUCCESS, USER_LOGOUT } from '../constants/userConstants';

const initialState = {
    userInfo: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null,
};

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_REGISTER_SUCCESS:
            return { ...state, userInfo: action.payload };
        case USER_LOGIN_SUCCESS:
            return { ...state, userInfo: action.payload };
        case USER_LOGOUT:
            return { ...state, userInfo: null };
        default:
            return state;
    }
};
