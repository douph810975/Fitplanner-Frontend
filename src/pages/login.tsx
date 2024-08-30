import { useState } from 'react';
import { useRouter } from 'next/router';
import {login} from "@/utils/api";
import Link from 'next/link';
// import * as console from "node:console";
const Login: React.FC = () => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await login({ username, password });

            if (response.ok) {
                const message = await response.text(); // 获取响应文本
                if (message === "Login successful") {
                    router.push('/dashboard'); // 登录成功后跳转到仪表板页面
                } else {
                    alert('Invalid username or password');
                }
            } else {
                // 处理非200系列状态码的情况
                alert('Invalid username or password');
            }

        } catch (error: any) {
            alert('An error occurred while trying to login');
            console.error(error);
        }


    };

    return (
        <div style={styles.container}>
            <h1>Welcome to Fitplanner!</h1>
            <form onSubmit={handleLogin} style={styles.form}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    style={styles.input}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    style={styles.input}
                />
                <button type="submit" style={styles.button}>Login</button>
            </form>

            <div style={styles.registerContainer}>
                <p>Don't have an account yet?</p>
                <Link href="/register">
                    <button type="button" style={{ ...styles.button, ...styles.registerButton }}>Register</button>
                </Link>
            </div>

            <p>{message}</p>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column' as const,
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        textAlign: 'center' as const,
    },
    form: {
        display: 'flex',
        flexDirection: 'column' as const,
        width: '300px',
    },
    input: {
        marginBottom: '10px',
        padding: '10px',
        fontSize: '16px',
    },
    button: {
        padding: '10px',
        fontSize: '16px',
        cursor: 'pointer',
    },
    registerContainer: {
        marginTop: '20px',
        textAlign: 'center' as const,
    },
    registerButton: {
        backgroundColor: 'blue',
        color: 'white',
    },
};
export default Login;
