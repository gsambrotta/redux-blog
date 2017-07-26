import 'babel-polyfill'

export const FETCH_POSTS = 'FETCH_POSTS'
export const CREATE_POST = 'CREATE_POST'
export const FETCH_POST = 'FETCH_POST'
export const DELETE_POST = 'DELETE_POST'

const URL_API = 'http://reduxblog.herokuapp.com/api'
const KEY_API = '?key=designbygio'

export function fetchPosts() {

	async function reqPosts() {
		const req = await fetch(`${URL_API}/posts${KEY_API}`)
		return req.json()
	}

	return {
		type: FETCH_POSTS,
		payload: reqPosts()
	}
}

export function createPost(blogPost, cb) {
	async function reqPost() {
		const req = await fetch(`${URL_API}/posts${KEY_API}`, {
				method: 'POST',
				body: JSON.stringify(blogPost)
	 	}).then(
	 		() => cb()// calling the cb function so it happen just when post is submit
	 	)


		return req.json()
	}

	console.log('req', reqPost())

	return {
		type: CREATE_POST,
		payload: reqPost()
	}
}

export function fetchPost(id) {
	async function reqPost() {
		const req = await fetch(`${URL_API}/posts/${id}${KEY_API}`)
		return req.json()
	}

	return {
		type: FETCH_POST,
		payload: reqPost()
	}
}

export function deletePost(id, cb){
	async function reqPost() {
		const req = await fetch(`${URL_API}/posts/${id}${KEY_API}`, {
				method: 'DELETE',
				body: JSON.stringify(blogPost)
	 	}).then(
	 		() => cb()// calling the cb function so it happen just when post is submit
	 	)
		return req.json()
	}

	return {
		type: DELETE_POST,
		payload: id // ??
	}
}
