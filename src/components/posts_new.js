import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';

class PostsNew extends Component {

    render() {
        // Redux form gives us some event handlers and things that automatically
        // get passed down to props from the reduxForm wrapping at bottom
        const { fields: { title, categories, content}, handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit(this.props.createPost)}>
                <h3>Create a New Post</h3>
                <div className="form-group">
                    <label>Title</label>
                    <input type="text" className="form-control" {...title} />
                </div>
                <div className="form-group">
                    <label>Categories</label>
                    <input type="text" className="form-control" {...categories} />
                </div>
                <div className="form-group">
                    <label>Content</label>
                    <textarea className="form-control" {...content} />
                </div>
                <button type="submit"
                        className="btn btn-primary">
                    Submit
                </button>
            </form>
        );
    }
}

// connect: first arg is mapStateToProps, 2nd is mapDispatchToProps
// reduxForm: 1st is form config, 2nd is mapStateToProps, 3rd is mapDispatchToProps

export default reduxForm({
    // Name does not have to match name of component - MUST BE UNIQUE!!!
    form: 'PostsNewForm',
    // Tell redux-form to watch these inputs
    // Used above to inject in to correspoinding inputs
    fields: ['title', 'categories', 'content']
}, null, { createPost })(PostsNew);

// user types something in ... record it on the application state
