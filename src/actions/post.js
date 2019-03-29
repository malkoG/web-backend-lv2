const PREFIX = 'POST';

export const GET_POST_LIST = `${PREFIX}/GET_POST_LIST`
export const GET_POST_LIST_SUCCESS = `${PREFIX}/GET_POST_LIST_SUCCESS`
export const GET_POST_LIST_FAILURE = `${PREFIX}/GET_POST_LIST_FAILURE`

export const GET_SINGLE_POST = `${PREFIX}/GET_SINGLE_POST`
export const GET_SINGLE_POST_SUCCESS = `${PREFIX}/GET_SINGLE_POST_SUCCESS`
export const GET_SINGLE_POST_FAILURE = `${PREFIX}/GET_SINGLE_POST_FAILURE`

export const CREATE_POST = `${PREFIX}/CREATE_POST`
export const CREATE_POST_SUCCESS = `${PREFIX}/CREATE_POST_SUCCESS`
export const CREATE_POST_FAILURE = `${PREFIX}/CREATE_POST_FAILURE`

export function getPostList() {
    return {
        type: GET_POST_LIST,
        loading: true
    }
}

export function getPostListSuccess(data) {
    return {
        type: GET_POST_LIST_SUCCESS,
        loading: false,
        data
    }
}

export function getPostListFailure(err) {
    return {
        type: GET_POST_LIST_FAILURE,
        loading: false,
        err
    }
}

export function getSInglePost() {
    return {
        type: GET_SINGLE_POST,
        loading: true
    }
}

export function getSInglePostSuccess() {
    return {
        type: GET_SINGLE_POST_SUCCESS,
        loading: false
    }
}

export function getSInglePostFailure() {
    return {
        type: GET_SINGLE_POST_FAILURE,
        loading: false
    }
}

export function createPost() {
    return {
        type: CREATE_POST,
        loading: true
    }
}

export function createPostSuccess(data) {
    return {
        type: CREATE_POST_SUCCESS,
        loading: false,
        data
    }
}

export function createPostFailure(err) {
    return {
        type: CREATE_POST_FAILURE,
        loading: false,
        err
    }
}