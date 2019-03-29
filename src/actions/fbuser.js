const PREFIX = 'FBUSER'

export const GET_FBUSER_LIST = `${PREFIX}/GET_FBUSER_LIST`
export const GET_FBUSER_LIST_SUCCESS = `${PREFIX}/GET_FBUSER_LIST_SUCCESS`
export const GET_FBUSER_LIST_FAILURE = `${PREFIX}/GET_FBUSER_LIST_FAILURE`

export const GET_FBUSER_DETAIL = `${PREFIX}/GET_FBUSER_DETAIL`
export const GET_FBUSER_DETAIL_SUCCESS = `${PREFIX}/GET_FBUSER_DETAIL_SUCCESS`
export const GET_FBUSER_DETAIL_FAILURE = `${PREFIX}/GET_FBUSER_DETAIL_FAILURE`

export const CREATE_FBUSER = `${PREFIX}/CREATE_FBUSER`
export const CREATE_FBUSER_SUCCESS = `${PREFIX}/CREATE_FBUSER_SUCCESS`
export const CREATE_FBUSER_FAILURE = `${PREFIX}/CREATE_FBUSER_FAILURE`

export function getFbuserList() {
    return {
        type: GET_FBUSER_LIST,
        loading: true
    }
}

export function getFbuserListSuccess(data) {
    return {
        type: GET_FBUSER_LIST_SUCCESS,
        loading: false,
        data
    }
}

export function getFbuserListFailure(err) {
    return {
        type: GET_FBUSER_LIST_FAILURE,
        loading: false,
        err
    }
}

export function getFbuserDetail() {
    return {
        type: GET_FBUSER_DETAIL,
        loading: true
    }
}

export function getFbuserDetailSuccess(data) {
    return {
        type: GET_FBUSER_DETAIL_SUCCESS,
        loading: false,
        data
    }
}

export function getFbuserDetailFailure(err) {
    return {
        type: GET_FBUSER_DETAIL_FAILURE,
        loading: false,
        err
    }
}

export function createFbuser() {
    return {
        type: CREATE_FBUSER,
        loading: true
    }
}

export function createFbuserSuccess(data) {
    return {
        type: CREATE_FBUSER_SUCCESS,
        loading: false,
        data
    }
}

export function createFbuserFailure(err) {
    return {
        type: CREATE_FBUSER_FAILURE,
        loading: false,
        err
    }
}