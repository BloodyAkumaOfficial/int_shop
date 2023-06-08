import axios from 'axios';

const urlServer = 'http://localhost:5000';

const $host = axios.create({
    baseURL: urlServer
});

const $authHost = axios.create({
    baseURL: urlServer
});

const authInterceptor = config => {
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`;
    return config;
}

$authHost.interceptors.request.use(authInterceptor);

export {
    $host,
    $authHost
}