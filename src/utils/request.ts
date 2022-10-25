/*
 * @Author: Anxure
 * @Github: https://github.com/Anxure
 * @Desc:
 * @Date: 2022-05-30 15:42:04
 * @LastEditors: Anxure
 * @LastEditTime: 2022-10-25 15:42:43
 */
import axios,{ AxiosError, AxiosRequestConfig }  from 'axios'
import { HTTP_CODE } from '@/enums/http'
import { message } from 'ant-design-vue';
import { useLoginOut } from '@/hooks/useLoginOut';
// const baseUrl = import.meta.env.PROD ? '/api' : import.meta.env.VUE_APP_API_HOST
const request = axios.create({
  timeout: 5000,
  baseURL: import.meta.env.VITE_APP_BASE_URL + '',
  headers: {
    'Content-Type': 'application/json;charset=UTF-8'
  }
})
request.interceptors.request.use(
  config => {
    return config
  },
  err => Promise.reject(err)
)
request.interceptors.response.use(response => {
  const { data } = response
  if (data.code === 200 || data.code === 0) {
    return data || [];
  } else {
    message.destroy()
    message.error(response.data.message || '服务器开小差啦，请稍后再试')
    return Promise.reject(response.data.message);
  }
},
  (error:AxiosError) => {
    if (error.response) {
      message.destroy()
      message.error(HTTP_CODE[error.response.status] || '服务器开小差啦，请稍后再试')
      if (error.response.status === 401) {
        useLoginOut()
      }
      return Promise.reject(error)
    } else {
      message.destroy()
      message.error('请求超时, 请刷新重试')
      return Promise.reject(new Error('请求超时, 请刷新重试'))
    }
  }
)
export default request;