import { userReducer } from './userReducer';
import { walletReducer } from './walletReducer';
import { combineReducers } from 'redux';

export const Reducers = combineReducers({
    userStore: userReducer,
    walletStore: walletReducer,
});