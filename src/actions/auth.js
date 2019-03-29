const PREFIX = 'AUTH'

export const LOGIN_USER = `${PREFIX}/LOGIN_USER`
export const LOGOUT_USER = `${PREFIX}/LOGOUT_USER`

export const LOGIN_SUCCESS = `${PREFIX}/LOGIN_SUCCESS`
export const LOGIN_FAILURE = `${PREFIX}/LOGIN_FAILURE`

export const LOGOUT_SUCCESS = `${PREFIX}/LOGOUT_SUCCESS`
export const LOGOUT_FAILURE = `${PREFIX}/LOGOUT_FAILURE`

export function loginUser() {
    return {
        type: LOGIN_USER,
        loading: true
    }
}

export function logoutUser() {
    return {
        type: LOGOUT_USER,
        loading: true,
    }
}

export function loginSuccess(token) {
    return {
        type: LOGIN_SUCCESS,
        loading: false,
        token
    }
}

export function loginFailure(err) {
    return {
        type: LOGIN_FAILURE,
        loading: false,
        err
    }
}

export function logoutSuccess() {
    return {
        type: LOGOUT_SUCCESS,
        loading: false,
    }
}

export function logoutFailure(err) {
    return {
        type: LOGOUT_FAILURE,
        loading: false,
        err
    }
}