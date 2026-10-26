import axios from "axios";

const httpClient = axios.create({
    baseURL: import.meta.env.VITE_BASE_API,
});

const handleError = (error) => {
    console.error("API Error:", error);
    throw error;
};

//  hàm get gửi request GET lấy dữ liệu API
const get = async (path, config) => {
    const response = await httpClient.get(path, config);
    return response.data;
};
const post = async (path, data, config) => {
    const response = await httpClient.post(path, data, config);
    return response.data;
};
const put = async (path, data, config) => {
    const response = await httpClient.put(path, data, config);
    return response.data;
};
const patch = async (path, data, config) => {
    const response = await httpClient.patch(path, data, config);
    return response.data;
};
const del = async (path, config) => {
    const response = await httpClient.delete(path, config);
    return response.data;
};

const http = { get, post, put, patch, del };
export { httpClient };
export default http;
