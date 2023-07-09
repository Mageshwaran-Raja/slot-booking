import axios, { AxiosError, AxiosResponse } from 'axios';

axios.defaults.baseURL = "http://localhost:5079/v1/";

const responseBody = (response: AxiosResponse) => response.data;

axios.interceptors.response.use(async response => {
    return response;
}, (error: AxiosError) => {
    const {data, status} = error.response as AxiosResponse;

    console.log("status: ", status, " data: ", data);

    return Promise.reject(error.response);
});

const request = {
    get: (url: string) => axios.get(url).then(responseBody),
    post: (url: string, body: {}) => axios.post(url, body).then(responseBody),
    put: (url: string, body: {}) => axios.put(url, body).then(responseBody),
    delete: (url: string) => axios.delete(url).then(responseBody)
};

const Rooms = {
    list: () => request.get('Rooms/GetAllRooms')
};

const agent = {
    Rooms
};

export default agent;