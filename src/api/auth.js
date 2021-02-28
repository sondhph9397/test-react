import request from "./request";
export const login = (data) => {
    return request.post('api/login', data);
}

export const logout = () => {
    return request.post('api/logout');
}

export const profile = () => {
    return request.post('api/profile');
}