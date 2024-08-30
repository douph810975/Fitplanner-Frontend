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
// export const login = (username:String,password:String) => {
//     // login, input json with credentials, output auth token
//     //const url = `${domain}/api/users/login`;
//     const url = new URL(`${domain}/api/users/login`);
//     url.searchParams.append("username", username.toString());
//     url.searchParams.append("password", password.toString());
//     return fetch(url, {
//         method: "POST",
//         // headers: {
//         //     "Content-Type": "application/json",
//         // },
//         //body: JSON.stringify(credential),
//     })
//         .then((response) => {
//             handleResponseStatus(response, "Fail to Log in");
//             return response.json();
//         })
//         .then((data) => {
//             localStorage.setItem("authToken", data.token);
//         });
// };
export const login = async(credential: any) => {
    const url = `${domain}/api/users/login`;
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json", // 设置请求头为 JSON
        },
        body: JSON.stringify(credential), // 发送 JSON 格式的请求体
    });

    return response; // 返回整个响应对象，方便前端进行进一步处理
};




export const register = async (userData: {
    email: string;
    username: string;
    password: string;
    verificationCode: string;
}) => {
    const url = `${domain}/api/users/register`;
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json", // 设置请求头为 JSON
        },
        body: JSON.stringify(userData), // 发送 JSON 格式的请求体
    });

    return response; // 返回整个响应对象，方便前端进行进一步处理
};

export const sendVerificationCode = async (email: string) => {
    const url = `${domain}/api/users/sendVerificationCode`;
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
    });

    return response;
};
