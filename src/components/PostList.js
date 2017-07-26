import React, { Component } from 'react'
import _ from 'lodash'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions/index'
import { Link } from 'react-router-dom'

class PostList extends Component {
	componentDidMount() {
		this.props.fetchPosts()
	}

	displayPosts() {
		//_.map like map() but also for object
		return _.map(this.props.posts, post =>
			<li key={post.id}>
				<Link to={`/posts/${post.id}`}>
					{ post.title }
				</Link>
			</li>
		)
	}

	render() {
		return (
			<div>
				<h2> Posts </h2>
				<Link to='/posts/new' className='btn btn-primary push-right'>
          Create New Post
        </Link>
				<ul>
					{this.displayPosts()}
				</ul>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		posts: state.posts
	}
}

export default connect(mapStateToProps, { fetchPosts })(PostList)
// { fetchPosts } -> same of writing:
// function mapDispatchToProps(dispatch) {
// 	return bindActionCreators({ fetchPosts }, dispatch )
// }
