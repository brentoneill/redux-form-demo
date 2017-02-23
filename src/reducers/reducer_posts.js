import { FETCH_POSTS, FETCH_POST, CLEAR_POST, ADD_TO_SELECTED } from '../actions/index';

const INITIAL_STATE = {
    // List of posts, shown on index page
    all: [],
    // Single posts, shown on post  detail page
    post: null,
    // List of selected posts
    selectedPostIds: []
};

// Single function for actual reducer w/ a swtich statement to catch different
// actions coming through the reducer. Each switch statement returns a new state
export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case FETCH_POSTS:
            return {...state, all: action.payload.data};
        case FETCH_POST:
            return {...state, post: action.payload};
        case CLEAR_POST:
            return {...state, post: null};
        case ADD_TO_SELECTED:
            let newState = {...state};
            newState.selectedPostIds.push(parseInt(action.payload));
            return newState;
        default:
            return state;
    }
}
