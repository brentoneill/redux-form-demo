import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts, clearPost, addToSelected } from '../actions/index';
import { Link } from 'react-router';

import SelectedPostsList from './selected_posts_list';

class PostsIndex extends Component {

    // Lifecycle method that fires right before rendered to DOM the FIRST time
    // Not called on subsequent re-renders
    componentWillMount() {
        this.props.clearPost();
        this.props.fetchPosts();
    }

    addToSelectedPosts(event) {
        this.props.addToSelected(event.target.value);
    }

    renderPosts() {
        return this.props.posts.map(post => {
            if (post.title) {
                return (
                    <li className="list-group-item" key={post.id}>
                        <div className="form-group pull-left">
                            <input type="checkbox"
                                    value={post.id}
                                    onChange={this.addToSelectedPosts.bind(this)}>
                            </input>
                        </div>
                        <Link to={`posts/${post.id}`}>
                            <span className="pull-xs-right">{post.categories}</span>
                            <strong>{post.title}</strong>
                        </Link>
                    </li>
                );
            }
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
                <div className="selected-posts">
                    <h3>Selected Posts</h3>
                    <SelectedPostsList />
                </div>
                <hr />
                <div className="all-posts">
                    <h3>All Posts</h3>
                    <ul className="list-group">
                        {this.renderPosts()}
                    </ul>
                </div>
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
    fetchPosts,
    clearPost,
    addToSelected
})(PostsIndex);

// NOTE: What is the difference between functional and class based components?

// Functional component - above is an example of class based
// export default () => {
//     return <div>List of blog posts</div>;
// };
