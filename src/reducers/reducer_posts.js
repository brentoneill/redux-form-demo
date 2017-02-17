import { FETCH_POSTS, FETCH_POST } from '../actions/index';

const INITIAL_STATE = {
    // List of posts, shown on index page
    all: [],
    // Single posts, shown on post  detail page
    post: null
};

// Single function for actual reducer w/ a swtich statement to catch different
// actions coming through the reducer. Each switch statement returns a new state
export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case FETCH_POSTS:
            // NOTE: Same as object.assign?
            return {...state, all: action.payload.data};
        case FETCH_POST:
            // NOTE: Same as object.assign?
            return {...state, post: action.payload.data};
        default:
            return state;
    }
}
