const PREFIX = 'LIKE';

export const FETCH_ALL_LIKES = `${PREFIX}/FETCH_ALL_LIKES`
export const FETCH_ALL_LIKES_SUCCESS = `${PREFIX}/FETCH_ALL_LIKES_SUCCESS`
export const FETCH_ALL_LIKES_FAILURE = `${PREFIX}/FETCH_ALL_LIKES_FAILURE`

export const FETCH_POST_LIKES = `${PREFIX}/FETCH_POST_LIKES`
export const FETCH_POST_LIKES_SUCCESS = `${PREFIX}/FETCH_POST_LIKES_SUCCESS`
export const FETCH_POST_LIKES_FAILURE = `${PREFIX}/FETCH_POST_LIKES_FAILURE`

export const FETCH_COMMENT_LIKES = `${PREFIX}/FETCH_COMMENT_LIKES`
export const FETCH_COMMENT_LIKES_SUCCESS = `${PREFIX}/FETCH_COMMENT_LIKES_SUCCESS`
export const FETCH_COMMENT_LIKES_FAILURE = `${PREFIX}/FETCH_COMMENT_LIKES_FAILURE`

export function fetchAllLikes() {
    return {
        type: FETCH_ALL_LIKES,
        loading: true
    }
}

export function fetchAllLikesSucess(data) {
    return {
        type: FETCH_ALL_LIKES_SUCCESS,
        loading: false,
        data
    }
}

export function fetchAllLikesFailure(err) {
    return {
        type: FETCH_ALL_LIKES_FAILURE,
        loading: false,
        err
    }
}

export function fetchPostLikes() {
    return {
        type: FETCH_POST_LIKES,
        loading: true
    }
}

export function fetchPostLikesSucess(data) {
    return {
        type: FETCH_POST_LIKES_SUCCESS,
        loading: false,
        data
    }
}

export function fetchPostLikesFailure(err) {
    return {
        type: FETCH_POST_LIKES_FAILURE,
        loading: false,
        err
    }
}

export function fetchCommentLikes() {
    return {
        type: FETCH_COMMENT_LIKES,
        loading: true
    }
}

export function fetchCommentLikesSucess(data) {
    return {
        type: FETCH_COMMENT_LIKES_SUCCESS,
        loading: false,
        data
    }
}

export function fetchCommentLikesFailure(err) {
    return {
        type: FETCH_COMMENT_LIKES_FAILURE,
        loading: false,
        err
    }
}