import { push } from 'react-router-redux'
import { takeEvery, all, put, call } from 'redux-saga/effects'

import { jwtLogin } from '../api/auth'
import * as authActions from '../actions/auth'

function* login({ username, password }) {
    yield put(authActions.loginUser());

    try {
        const response = yield call(jwtLogin, username, password);
        yield put(authActions.loginSuccess(response.token));

        yield put(push('/posts'))
    } catch (err) {
        yield put(authActions.loginFailure(err));
    }
}

function* logout() {
    yield put(authActions.logoutUser());

    try {
        localStorage.removeItem('programmers/auth');
        yield put(authActions.logoutSuccess());
    } catch (err) {
        yield put(authActions.logoutFailure(err));
    }

    yield put(push('/login'));
}

function* loginUser() {
    yield takeEvery(authActions.LOGIN_USER, login);
}

function* logoutUser() {
    yield takeEvery(authActions.LOGOUT_USER, logout);
}


export default function* authRoot() {
    yield all([loginUser(), logoutUser()])
}