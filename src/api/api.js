import fetch from './fetch.js'

// 登录 (params 和 data的区别：)
export function login (url, data) {
  return fetch({
    url: url,
    method: 'get',
    params: data
  })
}
// 登出
export function logout () {
  return fetch({
    url: '',
    method: 'post'
  })
}

const orderList = params => {
  return fetch({
    url: `/api/data/${params.category}/${params.limit}/${params.page}`,
    method: 'get',
    params: ''
  })
}

const articleList = params => {
  return fetch({
    url: `/api/search/query/listview/category/Android/count/${params.limit}/page/${params.page}`,
    method: 'get',
    params: ''
  })
}

const userList = params => {
  return fetch({
    url: '/api/person/getPersonListByCompany',
    method: 'get',
    params: params
  })
}

/**
 * 提交用户注册信息
 * @param params
 */
const postUserInfo = params => {
  return fetch({
    url: '',
    method: 'post',
    data: params
  })
}

/**
 * 验证邮箱 token是否过期
 * @param params
 */
const checkToken = params => {
  return fetch({
    url: '',
    method: 'get',
    params: params
  })
}
export function postMethodBody (url, data) {
  return fetch({
    url: url,
    method: 'post',
    data: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
    // headers: {'Content-Type': 'application/x-www-form-urlencoded'}
  })
}
export function postMethodParams (url, params) {
  return fetch({
    url: url,
    method: 'get',
    params: params
  })
}
const apiList = {
  orderList,
  articleList,
  userList,
  postUserInfo,
  checkToken,
  postMethodBody,
  postMethodParams,
  login,
  logout
}

export default apiList
