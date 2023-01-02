import request from '@api/request.js';

const prefix = "/user"

const login = async data => await request({
    url: `${prefix}/login`,
    method: "post",
    data
})

export {
    login
}
