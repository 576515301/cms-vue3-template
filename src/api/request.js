import axios from 'axios';
import { ElMessage } from 'element-plus'

const request = axios.create({
    baseURL: 'https://mock.mengxuegu.com/mock/628b4361cc411017d3bb5905/vitemock',
    timeout: 1000,
});


request.interceptors.request.use(req => {
    if (!req.headers.token)
        req.headers.token = "hhs"
    return req;
}, error => {
    return Promise.reject(error);
});

// 添加响应拦截器
request.interceptors.response.use(res => {
    const data = res.data;
    if (data.code != 200) {
        ElMessage.error(data.msg || '请求失败')
        return Promise.reject(error);
    }
    return data.data;
}, error => {
    ElMessage.error(error.message || '请求失败')
    return Promise.reject(error);
});


export default request;
