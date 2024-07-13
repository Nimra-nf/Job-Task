import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { userReducer } from './reducers/userReducer';
import { taskReducer } from './reducers/taskReducer';

const rootReducer = combineReducers({
    user: userReducer,
    tasks: taskReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
