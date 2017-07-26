import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createPost } from '../actions/index'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'

class PostNew extends Component {

	renderField(field) {
		const { meta: { touched, error} } = field
		const className = `${touched && error ? 'danger' : '' }`
		return (
			<div className={className}>
				<label>{field.label}</label>
				<input
					type='text'
					{ ...field.input }
				/>
				<div className='help'>
					{touched ? error : ''}
				</div>
			</div>
		)
	}

	onFormSubmit(values) {
		console.log('values', values)
		// passing a cb funct to action creator createPost()
		this.props.createPost(values, () => {
			// navigate to /
			this.props.history.push('/')
		})
	}

	render() {
		const { handleSubmit } = this.props

		return (
			<form onSubmit={handleSubmit(this.onFormSubmit.bind(this))}>
				<Field
					name='title'
					component={this.renderField}
					label='Title'
				/>
				<Field
					name='categories'
					component={this.renderField}
					label='Category'
				/>
				<Field
					name='content'
					component={this.renderField}
					label='Post Content'
				/>
				<button type='submit' className='btn btn-primary'>Submit</button>
				<Link to='/' className='btn btn-danger push-right'>
          Cancel
        </Link>
			</form>
		)
	}
}

function validate(values) {
	const errors = {};

	if(!values.title) {
		errors.title = 'Enter a valid title'
	}

	if(!values.category) {
	 	errors.category = 'Enter a valid category'
	}

	if(!values.content) {
	 	errors.content = 'Enter a valid content'
	}

	return errors;

}

export default reduxForm({
	validate,
	form: 'PostNewForm'
})(
	connect(null, { createPost })(PostNew)
)
