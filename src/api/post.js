import { baseAPI } from "./base";

export default PostAPI = {
    getSinglePost: (postId, config) => {
        return baseAPI
                .get(`/posts/${postId}`, config)
                .then(res => res.data)
                .catch(({response}) => {
                    throw response.data
                })
    },

    getPostList: (config) => {
        return baseAPI
                .get('/posts/', config)
                .then(res => res.data)
                .catch(({response}) => {
                    throw response.data
                })
    },

    createPost: (data, config) => {
        return baseAPI
                .post('/posts/', data, config)
                .then(res => res.data)
                .catch(({response}) => {
                    throw response.data
                })
    }
}