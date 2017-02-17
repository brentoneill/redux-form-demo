import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POST = 'FETCH_POST';
export const CREATE_POST = 'CREATE_POST';
export const DELETE_POST = 'DELETE_POST';
export const CLEAR_POST = 'CLEAR_POST';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=bosecretsauce';

export function fetchPosts() {
    const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

    return {
        type: FETCH_POSTS,
        payload: request
    };
}

export function fetchPost(id) {
    const request = axios.get(`${ROOT_URL}/posts/${id}/${API_KEY}`);

    // WITH THUNK - basically handles the "resolve" for a view that calls before render (componentWillMount)
    return (dispatch) => {
        request.then(({data}) => {
            dispatch({
                type: FETCH_POST,
                payload: data
            });
        });
    }

    // WITHOUT THUNK
    // return {
    //     type: FETCH_POST,
    //     payload: request
    // };
}

export function createPost(props) {
    const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, props);

    return {
        type: CREATE_POST,
        payload: request
    }
}

export function deletePost(id) {
    const request = axios.delete(`${ROOT_URL}/posts/${id}/${API_KEY}`);

    return {
        type: DELETE_POST,
        payload: request
    };
}

export function clearPost() {
    return {
        type: CLEAR_POST,
        payload: null
    }
}
