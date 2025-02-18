import { GET_TASKS, ADD_TASK, UPDATE_TASK, DELETE_TASK } from '../constants/taskConstants';

const initialState = {
    tasks: [],
};

export const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_TASKS:
            return { ...state, tasks: action.payload };
        case ADD_TASK:
            return { ...state, tasks: [...state.tasks, action.payload] };
        case UPDATE_TASK:
            return { ...state, tasks: state.tasks.map(task => task._id === action.payload._id ? action.payload : task) };
        case DELETE_TASK:
            return { ...state, tasks: state.tasks.filter(task => task._id !== action.payload) };
        default:
            return state;
    }
};
