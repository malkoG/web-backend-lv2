const PREFIX = 'COMMENT'

export const FETCH_SINGLE_COMMENT = `${PREFIX}/FETCH_SINGLE_COMMENT`
export const FETCH_SINGLE_COMMENT_SUCCESS = `${PREFIX}/FETCH_SINGLE_COMMENT_SUCCESS`
export const FETCH_SINGLE_COMMENT_FAILURE = `${PREFIX}/FETCH_SINGLE_COMMENT_FAILURE`

export const FETCH_COMMENTS_FOR_POST = `${PREFIX}/FETCH_COMMENTS_FOR_POST`
export const FETCH_COMMENTS_FOR_POST_SUCCESS = `${PREFIX}/FETCH_COMMENTS_FOR_POST_SUCCESS`
export const FETCH_COMMENTS_FOR_POST_FAILURE = `${PREFIX}/FETCH_COMMENTS_FOR_POST_FAILURE`

export const FETCH_COMMENTS_FOR_COMMENT = `${PREFIX}/FETCH_COMMENTS_FOR_COMMENT`
export const FETCH_COMMENTS_FOR_COMMENT_SUCCESS = `${PREFIX}/FETCH_COMMENTS_FOR_COMMENT_SUCCESS`
export const FETCH_COMMENTS_FOR_COMMENT_FAILURE = `${PREFIX}/FETCH_COMMENTS_FOR_COMMENT_FAILURE`

export function fetchSingleComment() {
    return {
        type: FETCH_SINGLE_COMMENT,
        loading: true
    }
}

export function fetchSingleCommentSuccess(data) {
    return {
        type: FETCH_SINGLE_COMMENT_SUCCESS,
        loading: false,
        data
    }
}

export function fetchSingleCommentFailure(err) {
    return {
        type: FETCH_COMMENTS_FOR_COMMENT_FAILURE,
        loading: false,
        err
    }
}

export function fetchCommentsForPost() {
    return {
        type: FETCH_COMMENTS_FOR_POST,
        loading: true
    }
}

export function fetchCommentsForPostSuccess(data) {
    return {
        type: FETCH_COMMENTS_FOR_POST_SUCCESS,
        loading: false,
        data
    }
}

export function fetchCommentsForPostFailure(err) {
    return {
        type: FETCH_COMMENTS_FOR_POST_FAILURE,
        loading: false,
        err
    }
}

export function fetchCommentsForComment() {
    return {
        type: FETCH_COMMENTS_FOR_COMMENT,
        loading: true
    }
}

export function fetchCommentsForCommentSuccess(data) {
    return {
        type: FETCH_COMMENTS_FOR_COMMENT_SUCCESS,
        loading: false,
        data
    }
}

export function fetchCommentsForCommentFailure(err) {
    return {
        type: FETCH_COMMENTS_FOR_COMMENT_FAILURE,
        loading: false,
        err
    }
}