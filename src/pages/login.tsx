import React, { useState } from 'react';
// import axios from 'axios';
import {login} from "@/utils/api";
import { useRouter } from 'next/router';

const LoginPage: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleLogin = async () => {
        try {
            const response = await login( {
                username,
                password,
            });
        } catch (error) {
            //alert('Invalid username or password');
        }
    };

    return (
        <div>
            <h1>Login</h1>
            <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
            />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
            />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default LoginPage;
