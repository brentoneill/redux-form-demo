import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';
import { Link } from 'react-router';
import _ from 'lodash';

const FIELDS = {
    title: {
        type: 'input',
        label: 'Title for New Post'
    },
    categories: {
        type: 'input',
        label: 'Enter some categories for the post'
    },
    content: {
        type: 'textarea',
        label: 'Post Contents'
    }
};

class PostsNew extends Component {

    // Creates new object on PostsNew class
    static contextTypes = {
        router: PropTypes.object
    };

    onSubmit(props) {
        // props are the props from the form that come through the handleSubmit
        // function
        this.props.createPost(props)
            .then(response => {
                // Will navigate to a new page
                this.context.router.push('/');
            }, error => {
                console.log(err);
            });
    }

    renderField(fieldConfig, field) {
        const fieldHelper = this.props.fields[field];
        return (
            <div key={fieldHelper.label} className={`form-group ${fieldHelper.touched && fieldHelper.invalid ? 'has-danger' : ''}`}>
                <label>{fieldConfig.label}</label>
                <fieldConfig.type className="form-control" {...fieldHelper} />
                <div className="text-help">
                    {fieldHelper.touched ? fieldHelper.error: ''}
                </div>
            </div>
        );
    }

    render() {
        // Redux form gives us some event handlers and things that automatically
        // get passed down to props from the reduxForm wrapping at bottom
        const { fields: { title, categories, content}, handleSubmit } = this.props;

        return (
            <form onSubmit={ handleSubmit(this.onSubmit.bind(this)) }>
                <h3>Create a New Post</h3>
                {_.map(FIELDS, this.renderField.bind(this))}
                <button type="submit"
                        className="btn btn-primary">
                    Submit
                </button>
                <Link to="/" className="btn btn-link">Cancel</Link>
            </form>
        );
    }
}

function validate(values) {
    const errors = {};

    _.each(FIELDS, (type, field) => {
        if (!values[field]) {
            errors[field] = `Enter a ${field}`;
        }
    });

    return errors;
}

// connect: first arg is mapStateToProps, 2nd is mapDispatchToProps
// reduxForm: 1st is form config, 2nd is mapStateToProps, 3rd is mapDispatchToProps

export default reduxForm({
    // Name does not have to match name of component - MUST BE UNIQUE!!!
    form: 'PostsNewForm',
    // Tell redux-form to watch these inputs
    // Used above to inject in to correspoinding inputs
    fields: _.keys(FIELDS),
    validate
}, null, { createPost })(PostsNew);

// user types something in ... record it on the application state
