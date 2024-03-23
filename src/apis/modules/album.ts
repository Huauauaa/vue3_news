import http from '../http'

const getAlbums = () => {
  return http.get<Album[]>('/albums')
}

export default {
  getAlbums,
}
