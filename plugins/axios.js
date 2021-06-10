import axios from 'axios'

class AxiosClient {
    request(options = {}) {
        const instance = axios.create({
            ...options,
            baseURL: process.env.baseUrl,
            timeout: 1000,
        });
        return instance
    }
}

export default new AxiosClient;
