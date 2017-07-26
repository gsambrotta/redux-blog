import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPost } from '../actions/index'

class PostShow extends Component {
	componentDidMount() {
		if(!this.props.post){
			const { id } = this.props.match.params
			this.props.fetchPost(id)
		}
	}

	onDeletePost() {
		const { id } = this.props.match.params
		this.props.deletePost(id, () => {
			this.props.history.push('/')
		})
	}

	render() {
		const { post } = this.props

		if(!post) {
			return <div> Loading... </div>
		}

		return (
			<div>
				<Link to='/'>
          Back to Index
        </Link>
        <button
        	className='btn btn-danger push-right'
        	onClick={this.onDeletePost.bind(this)}
        >
          Delete
        </button>
				<p>TEST</p>
				<h2>{post.title}</h2>
				<strong>{post.categories}</strong>
				<p>{post.content}</p>
			</div>
		)
	}
}

// this.props === ownProps
function mapStateToProps({ posts }, ownProps){
	return {
		post: posts[ownProps.match.params.id]
	}
}

export default connect(null, { fetchPost } )(PostShow)

