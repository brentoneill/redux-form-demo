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

    renderPosts() {
        return this.props.posts.map(post => {
            return (
                <li className="list-group-item" key={post.id}>
                    <span className="pull-xs-right">{post.categories}</span>
                    <strong>{post.title}</strong>
                </li>
            )
        });
    }

    render() {
        return (
            <div className="clearfix">
                <div className="pull-right">
                    <Link to="/posts/new" className="btn btn-primary">
                        Add a post
                    </Link>
                </div>
                <h3>Posts</h3>
                <ul className="list-group">
                    {this.renderPosts()}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        posts: state.posts.all
    };
}

// 1st arg is mapStateToProps, 2nd is mapDispatchToProps
export default connect(mapStateToProps, {
    fetchPosts
})(PostsIndex);

// NOTE: What is the difference between functional and class based components?

// Functional component - above is an example of class based
// export default () => {
//     return <div>List of blog posts</div>;
// };
