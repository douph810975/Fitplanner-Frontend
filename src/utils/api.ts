import axios from 'axios';
import handleResponseStatus from "./errorUtils";
const apiClient = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default apiClient;
const domain = 'http://localhost:8080'
export const login = (username:String,password:String) => {
    // login, input json with credentials, output auth token
    //const url = `${domain}/api/users/login`;
    const url = new URL(`${domain}/api/users/login`);
    url.searchParams.append("username", username.toString());
    url.searchParams.append("password", password.toString());
    return fetch(url, {
        method: "POST",
        // headers: {
        //     "Content-Type": "application/json",
        // },
        //body: JSON.stringify(credential),
    })
        .then((response) => {
            handleResponseStatus(response, "Fail to Log in");
            return response.json();
        })
        .then((data) => {
            localStorage.setItem("authToken", data.token);
        });
};

export const register = (credential: any) => {
    // register, input json, output status
    const url = `${domain}/api/users/register`;
    return fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(credential),
    })
        .then((response) => {
            handleResponseStatus(response, "Fail to register");
        })
        .then((data) => data);
};