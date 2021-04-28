import axios from "axios";

export const AUTH_API = 'http://localhost/technoland/login.php';
export const CHECK_AUTH_API = 'http://localhost/technoland/user-info.php';

export const Axios = axios.create({
    baseURL: 'http://localhost/technoland/',
});
