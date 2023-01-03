import request from '@api/request.js';

const prefix = "/user"

const login = async data => await request({
    url: `${prefix}/login`,
    method: "post",
    data
})

const getUserInfo = async () => await request({
    url: `${prefix}/userInfo`,
    method: "get"
})

export {
    login,
    getUserInfo
}
