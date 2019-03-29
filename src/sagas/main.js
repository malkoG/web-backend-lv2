import { all } from 'redux-saga/effects'

import authRoot from './auth'
import fbuserRoot from './fbuser'
import commentRoot from './comment'
import likeRoot from './like'
import postRoot from './post'

export default function* rootSaga() {
    yield all([
        authRoot,
        fbuserRoot,
        commentRoot,
        likeRoot,
        postRoot
    ])
}