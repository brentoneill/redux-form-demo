// Takes a list of posts and post IDs and picks out the selected posts
import  { createSelector } from 'reselect';

// Create select function to pick off pieces we care about
const postsSelector = state => state.posts.all;
const selectedPostsSelector = state => state.posts.selectedPostIds;

// Function to do calculation between the selectors
const getPosts = (posts, selectedPostIds) => {
    const selectedPosts = posts.filter(post => {
        return selectedPostIds.includes(post.id);
    });
    
    return selectedPosts;
};

export default createSelector (
    postsSelector,              // pick off a piece of state
    selectedPostsSelector,      // pick off a piece of state
    getPosts                    // function that selects
);

// Can pass in as many selector functions
// Every time state changes, simple selectors get passed in to the
// last argument. Last arg is the function that has the select logic.
// Everything before that just picks off a piece of state.
