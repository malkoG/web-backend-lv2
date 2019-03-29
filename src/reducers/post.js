import * as postActions from '../actions/post'

const initialState = {
    post: null,
    post_list: [],
    loading: false,
    err: null
};

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case postActions.GET_POST_LIST:
            return {
                ...state,
                loading: action.loading
            };
        case postActions.GET_POST_LIST_SUCCESS:
            return {
                loading: action.loading,
                post_list: action.data,
                err: null
            };
        case postActions.GET_POST_LIST_FAILURE:
            return {
                ...state,
                loading: action.loading,
                err: action.err
            };
        case postActions.GET_SINGLE_POST:
            return {
                ...state,
                loading: action.loading
            };
        case postActions.GET_SINGLE_POST_SUCCESS:
            return {
                loading: action.loading,
                post: action.data,
                err: null
            };
        case postActions.GET_SINGLE_POST_FAILURE:
            return {
                ...state,
                loading: action.loading,
                err: action.err
            };
        case postActions.CREATE_POST:
            return {
                ...state,
                loading: action.loading
            }
        case postActions.CREATE_POST_SUCCESS:
            return {
                loading: action.loading,
                post: action.data,
                err: null
            }
        case postActions.CREATE_POST_FAILURE:
            return {
                ...state,
                loading: action.loading,
                err: action.err
            }
        default:
            return state;
    }
};

export default postReducer;