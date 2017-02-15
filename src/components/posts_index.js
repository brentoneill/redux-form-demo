import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router';

class PostsIndex extends Component {

    // Lifecycle method that fires right before rendered to DOM the FIRST time
    // Not called on subsequent re-renders
    componentWillMount() {
        this.props.fetchPosts();
    }

    render() {
        return (
            <div className="clearfix">
                <div className="inline-block lead pull-left">
                    List of blog posts
                </div>
                <div className="pull-right">
                    <Link to="/posts/new" className="btn btn-primary">
                        Add a post
                    </Link>
                </div>

            </div>
        );
    }
}

// 1st arg is mapStateToProps, 2nd is mapDispatchToProps
export default connect(null, {
    fetchPosts
})(PostsIndex);

// NOTE: What is the difference between functional and class based components?

// Functional component - above is an example of class based
// export default () => {
//     return <div>List of blog posts</div>;
// };
