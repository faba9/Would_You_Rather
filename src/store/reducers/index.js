import {combineReducers} from 'redux';
import authReducer from './authReducer';
import usersReducer from './usersReducer';
import questionsReducer from './questionsReducer';

const reducers = combineReducers({
    authReducer,
    usersReducer,
    questionsReducer
});
export default reducers;