import axios from 'axios'


const api = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    timeout: 10000,
})

api.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
)

api.interceptors.response.use(
    (res) => {
        return res;
    },
    (error) => {
        const status = error.res?.status;

        switch (status) {
            case 401:
                console.error("Unauthorized");
                break;

            case 403:
                console.error("Forbidden");
                break;

            case 404:
                console.error("Resource not found");
                break;

            case 500:
                console.error("Internal server error");
                break;

            default:
                console.error("Something went wrong");
        }
        return Promise.reject(error);
    }
)



export default api;