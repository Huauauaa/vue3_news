import http from '../http'

const getPosts = () => {
  return http.get<Post[]>('/posts')
}
const getPostById = (id: number) => {
  return http.get<Post>(`/posts/${id}`)
}

export default {
  getPosts,
  getPostById,
}
