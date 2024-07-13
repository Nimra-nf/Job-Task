import axios from 'axios';
import { GET_TASKS, ADD_TASK, UPDATE_TASK, DELETE_TASK } from '../constants/taskConstants';

export const getTasks = () => async (dispatch, getState) => {
    const { userInfo } = getState().user;
    try {
        const { data } = await axios.get('/api/tasks', {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        });
        dispatch({ type: GET_TASKS, payload: data });
    } catch (error) {
        console.error(error);
    }
};

export const addTask = (task) => async (dispatch, getState) => {
    const { userInfo } = getState().user;
    try {
        const { data } = await axios.post('/api/tasks', task, {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        });
        dispatch({ type: ADD_TASK, payload: data });
    } catch (error) {
        console.error(error);
    }
};

export const updateTask = (id, task) => async (dispatch, getState) => {
    const { userInfo } = getState().user;
    try {
        const { data } = await axios.put(`/api/tasks/${id}`, task, {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        });
        dispatch({ type: UPDATE_TASK, payload: data });
    } catch (error) {
        console.error(error);
    }
};

export const deleteTask = (id) => async (dispatch, getState) => {
    const { userInfo } = getState().user;
    try {
        await axios.delete(`/api/tasks/${id}`, {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        });
        dispatch({ type: DELETE_TASK, payload: id });
    } catch (error) {
        console.error(error);
    }
};
