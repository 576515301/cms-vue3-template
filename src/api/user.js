import request from '@api/request.js';

const prefix = "/user"

const login = async data => await request({
    url: `${prefix}/login`,
    method: "post",
    data
})

const userInfo = async data => await request({
    url: `${prefix}/userInfo`,
    method: "get",
    data
})

export {
    login,
    userInfo
}
