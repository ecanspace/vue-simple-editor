import Vue from 'vue'
import axios from 'axios'
import { Message } from 'element-ui'
// import { Dialog } from 'tzcloud-element-pro'

Vue.use(function install(Vue) {
  // Create an instance using the config defaults provided by the library
  // At this point the timeout config value is `0` as is the default for the library
  const instance = axios.create({
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    }
  })

  // // Request interceptor
  // instance.interceptors.request.use(function (config) {
  //   // Do something before request is sent
  //   // config.headers.token = sessionStorage.getItem('adminToken');
  //   return config
  // }, function (error) {
  //   // Do something with request error
  //   return Promise.reject(error)
  // })

  // Response interceptor
  instance.interceptors.response.use(function (response) {
    // if (response.status === 200) {
    //   return response.data
    // }

    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    if (response.config.responseType == 'blob') {
      return handleBlobResponse(response)
    } else {
      return handleResponse(response)
    }

  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error)
  })

  // Excel 响应处理函数
  function handleBlobResponse(res) {
    const { headers, data } = res
    const blob = new Blob([data], {
      type: 'application/octet-stream; charset=utf-8'
    })

    const contentDisposition = headers['content-disposition']
    // const result = contentDisposition.match(/filename=([^;]+\.[^\.;]+);*/)
    const result = contentDisposition.match(/filename=('|")([^'"]+)\1/)
    const filename = result ? decodeURIComponent(result[2]) : ''

    // console.log(filename)

    const node = document.createElement('a')
    const href = window.URL.createObjectURL(blob)

    node.href = href
    node.download = filename
    node.style.display = 'none'
    
    document.body.appendChild(node)
    node.click()

    document.body.removeChild(node)
    window.URL.revokeObjectURL(href)
  }

  let messageLocked = false;

  // Json 响应处理
  function handleResponse(res) {
    const data = res.data, code = data.code

    if (code == '0000' || code == '200') { // resolve
      return data
    } else { // reject
      if (messageLocked) return;

      messageLocked = true

      Message.warning({
        message: data.message || '系统开小差啦~',
        onClose: () => messageLocked = false
      })

      return Promise.reject(data)
    }
  }

  Vue.prototype.$axios = instance
})
