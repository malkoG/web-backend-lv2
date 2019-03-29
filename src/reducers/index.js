import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import authReducer from './auth'
import commentReducer from './comment'
import fbuserReducer from './fbuser'
import likeReducer from './like'
import postReducer from './post'

export const rootReducer = combineReducers({
    routing: routerReducer,
    authReducer,
    commentReducer,
    fbuserReducer,
    likeReducer,
    postReducer
})