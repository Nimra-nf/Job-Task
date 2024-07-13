import axios from 'axios';
import { USER_REGISTER_SUCCESS, USER_LOGIN_SUCCESS, USER_LOGOUT } from '../constants/userConstants';

export const register = (email, password, role) => async (dispatch) => {
    try {
        const { data } = await axios.post('/api/users/register', { email, password, role });
        dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
    } catch (error) {
        console.error(error);
    }
};

export const login = (email, password) => async (dispatch) => {
    try {
        const { data } = await axios.post('/api/users/login', { email, password });
        dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
        localStorage.setItem('userInfo', JSON.stringify(data));
    } catch (error) {
        console.error(error);
    }
};

export const logout = () => (dispatch) => {
    localStorage.removeItem('userInfo');
    dispatch({ type: USER_LOGOUT });
};
