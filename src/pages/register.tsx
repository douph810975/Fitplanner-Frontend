// import { useState } from 'react';
// import { useRouter } from 'next/router';
// import { register } from "@/utils/api";
// import Link from 'next/link';
//
// const Register: React.FC = () => {
//     const [email, setEmail] = useState<string>('');
//     const [username, setUsername] = useState<string>('');
//     const [password, setPassword] = useState<string>('');
//     const [message, setMessage] = useState<string>('');
//     const router = useRouter();
//
//     const handleRegister = async (e: React.FormEvent) => {
//         e.preventDefault();
//
//         try {
//             const response = await register({ email, username, password });
//
//             if (response.ok) {
//                 const message = await response.text(); // 获取响应文本
//                 if (message === "Registration successful") {
//                     router.push('/login'); // 注册成功后跳转到登录页面
//                 } else {
//                     alert('Registration failed');
//                 }
//             } else {
//                 // 处理非200系列状态码的情况
//                 alert('Registration failed');
//             }
//
//         } catch (error: any) {
//             alert('An error occurred while trying to register');
//             console.error(error);
//         }
//     };
//
//     return (
//         <div style={styles.container}>
//             <h1>Create Your Fitplanner Account</h1>
//             <form onSubmit={handleRegister} style={styles.form}>
//                 <input
//                     type="email"
//                     placeholder="Email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     required
//                     style={styles.input}
//                 />
//                 <input
//                     type="text"
//                     placeholder="Username"
//                     value={username}
//                     onChange={(e) => setUsername(e.target.value)}
//                     required
//                     style={styles.input}
//                 />
//                 <input
//                     type="password"
//                     placeholder="Password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     required
//                     style={styles.input}
//                 />
//                 <button type="submit" style={styles.button}>Register</button>
//             </form>
//
//             <div style={styles.loginContainer}>
//                 <p>Already have an account?</p>
//                 <Link href="/login">
//                     <button type="button" style={{ ...styles.button, ...styles.loginButton }}>Login</button>
//                 </Link>
//             </div>
//
//             <p>{message}</p>
//         </div>
//     );
// };
//
// const styles = {
//     container: {
//         display: 'flex',
//         flexDirection: 'column' as const,
//         justifyContent: 'center',
//         alignItems: 'center',
//         height: '100vh',
//         textAlign: 'center' as const,
//     },
//     form: {
//         display: 'flex',
//         flexDirection: 'column' as const,
//         width: '300px',
//     },
//     input: {
//         marginBottom: '10px',
//         padding: '10px',
//         fontSize: '16px',
//     },
//     button: {
//         padding: '10px',
//         fontSize: '16px',
//         cursor: 'pointer',
//     },
//     loginContainer: {
//         marginTop: '20px',
//         textAlign: 'center' as const,
//     },
//     loginButton: {
//         backgroundColor: 'grey',
//         color: 'white',
//     },
// };
//
// export default Register;
import { useState } from 'react';
import { useRouter } from 'next/router';
import { register, sendVerificationCode } from "@/utils/api";
import Link from 'next/link';

const Register: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [verificationCode, setVerificationCode] = useState<string>(''); // 新增验证码输入状态
    const [message, setMessage] = useState<string>('');
    const router = useRouter();

    const handleSendCode = async () => {
        try {
            const response = await sendVerificationCode(email); // 发送验证码
            if (response.ok) {
                alert('Verification code sent to your email.');
            } else {
                alert('Failed to send verification code.');
            }
        } catch (error: any) {
            alert('An error occurred while sending the verification code.');
            console.error(error);
        }
    };

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await register({ email, username, password, verificationCode }); // 增加验证码验证

            if (response.ok) {
                const message = await response.text();
                if (message === "Registration successful") {
                    router.push('/login');
                } else {
                    alert('Registration failed: ' + message);
                }
            } else {
                alert('Registration failed.');
            }

        } catch (error: any) {
            alert('An error occurred while trying to register.');
            console.error(error);
        }
    };

    return (
        <div style={styles.container}>
            <h1>Create Your Fitplanner Account</h1>
            <form onSubmit={handleRegister} style={styles.form}>
                <div style={styles.emailContainer}>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        style={styles.input}
                    />
                    <button type="button" onClick={handleSendCode} style={styles.sendCodeButton}>
                        Send Code
                    </button>
                </div>
                <input
                    type="text"
                    placeholder="Verification Code"
                    value={verificationCode}
                    onChange={(e) => setVerificationCode(e.target.value)}
                    required
                    style={styles.input}
                />
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
                <button type="submit" style={styles.button}>Register</button>
            </form>

            <div style={styles.loginContainer}>
                <p>Already have an account?</p>
                <Link href="/login">
                    <button type="button" style={{ ...styles.button, ...styles.loginButton }}>Login</button>
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
    emailContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '10px',
    },
    input: {
        marginBottom: '10px',
        padding: '10px',
        fontSize: '16px',
        flex: '1',
    },
    sendCodeButton: {
        marginLeft: '10px',
        padding: '10px',
        fontSize: '16px',
        cursor: 'pointer',
        backgroundColor: '#ADD8E6',
        color: 'white',
    },
    button: {
        padding: '10px',
        fontSize: '16px',
        cursor: 'pointer',
    },
    loginContainer: {
        marginTop: '20px',
        textAlign: 'center' as const,
    },
    loginButton: {
        backgroundColor: 'grey',
        color: 'white',
    },
};

export default Register;
