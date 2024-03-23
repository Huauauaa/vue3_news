import axios from 'axios'
import type {
  AxiosResponse,
  AxiosInstance,
  AxiosError,
  AxiosRequestConfig,
} from 'axios'

const instance: AxiosInstance = axios.create({
  baseURL: '/api/',
})

instance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response.data
  },
  (error: AxiosError) => {
    return Promise.reject(error)
  },
)

export default {
  get<T = any>(url: string, config?: AxiosRequestConfig): Promise<T> {
    return instance.get(url, config)
  },
}
