// import React, { useState } from 'react';
//
// const Share: React.FC = () => {
//     const [text, setText] = useState<string>(''); // 用户输入的健身动态
//     const [image, setImage] = useState<File | null>(null); // 上传的图片文件
//     const [uploading, setUploading] = useState<boolean>(false); // 上传状态
//     const [uploadSuccess, setUploadSuccess] = useState<boolean | null>(null); // 上传结果状态
//
//     // 处理图片文件的选择
//     const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         const files = e.target.files;
//         if (files && files.length > 0) {
//             setImage(files[0]);
//         }
//     };
//
//     // 处理文字输入
//     const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
//         setText(e.target.value);
//     };
//
//     // 提交数据
//     const handleSubmit = async (e: React.FormEvent) => {
//         e.preventDefault();
//
//         if (!text && !image) {
//             alert('请至少上传一张图片或输入一段文字！');
//             return;
//         }
//
//         const formData = new FormData();
//         if (image) {
//             formData.append('image', image);
//         }
//         formData.append('text', text);
//
//         try {
//             setUploading(true);
//             const domain = 'http://localhost:8080'
//             const url = `${domain}/api/share`;
//             const response = await fetch(url, {
//                 method: 'POST',
//                 body: formData,
//             });
//
//             if (response.ok) {
//                 setUploadSuccess(true);
//                 setText('');
//                 setImage(null);
//             } else {
//                 setUploadSuccess(false);
//             }
//         } catch (error) {
//             setUploadSuccess(false);
//             console.error('上传失败：', error);
//         } finally {
//             setUploading(false);
//         }
//     };
//
//     return (
//         <div style={styles.container}>
//             <h1>分享你的健身动态</h1>
//             <form onSubmit={handleSubmit} style={styles.form}>
//                 <textarea
//                     placeholder="写下你的健身动态..."
//                     value={text}
//                     onChange={handleTextChange}
//                     style={styles.textarea}
//                 />
//                 <input type="file" accept="image/*" onChange={handleImageChange} style={styles.fileInput} />
//                 {image && <p style={styles.imageInfo}>已选择图片：{image.name}</p>}
//
//                 <button type="submit" style={styles.button} disabled={uploading}>
//                     {uploading ? '上传中...' : '分享'}
//                 </button>
//             </form>
//
//             {uploadSuccess === true && <p style={styles.successMessage}>上传成功！</p>}
//             {uploadSuccess === false && <p style={styles.errorMessage}>上传失败，请重试。</p>}
//         </div>
//     );
// };
//
// const styles = {
//     container: {
//         padding: '20px',
//         textAlign: 'center' as const,
//     },
//     form: {
//         display: 'flex',
//         flexDirection: 'column' as const,
//         alignItems: 'center',
//         gap: '10px',
//     },
//     textarea: {
//         width: '300px',
//         height: '100px',
//         padding: '10px',
//         fontSize: '16px',
//         borderRadius: '5px',
//         border: '1px solid #ccc',
//     },
//     fileInput: {
//         fontSize: '16px',
//     },
//     imageInfo: {
//         marginTop: '10px',
//         fontStyle: 'italic',
//         color: '#555',
//     },
//     button: {
//         padding: '10px 20px',
//         fontSize: '16px',
//         backgroundColor: '#4CAF50',
//         color: 'white',
//         border: 'none',
//         borderRadius: '5px',
//         cursor: 'pointer',
//     },
//     successMessage: {
//         color: 'green',
//         marginTop: '20px',
//     },
//     errorMessage: {
//         color: 'red',
//         marginTop: '20px',
//     },
// };
//
// export default Share;

//
// import React, { useState, useEffect } from 'react';
// import { Pyq } from '@/types/Pyq';
//
// interface SharePageProps {
//     pyqData: Pyq[];
// }
//
// const Share: React.FC<SharePageProps> = ({ pyqData }) => {
//     const [text, setText] = useState<string>(''); // 用户输入的健身动态
//     const [image, setImage] = useState<File | null>(null); // 上传的图片文件
//     const [uploading, setUploading] = useState<boolean>(false); // 上传状态
//     const [uploadSuccess, setUploadSuccess] = useState<boolean | null>(null); // 上传结果状态
//
//     // 处理图片文件的选择
//     const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         const files = e.target.files;
//         if (files && files.length > 0) {
//             setImage(files[0]);
//         }
//     };
//
//     // 处理文字输入
//     const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
//         setText(e.target.value);
//     };
//
//     // 提交数据
//     const handleSubmit = async (e: React.FormEvent) => {
//         e.preventDefault();
//
//         if (!text && !image) {
//             alert('请至少上传一张图片或输入一段文字！');
//             return;
//         }
//
//         const formData = new FormData();
//         if (image) {
//             formData.append('image', image);
//         }
//         formData.append('text', text);
//
//         try {
//             setUploading(true);
//             const domain = 'http://localhost:8080';
//             const url = `${domain}/api/share`;
//             const response = await fetch(url, {
//                 method: 'POST',
//                 body: formData,
//             });
//
//             if (response.ok) {
//                 setUploadSuccess(true);
//                 setText('');
//                 setImage(null);
//             } else {
//                 setUploadSuccess(false);
//             }
//         } catch (error) {
//             setUploadSuccess(false);
//             console.error('上传失败：', error);
//         } finally {
//             setUploading(false);
//         }
//     };
//
//     return (
//         <div style={styles.container}>
//             <h1>分享你的健身动态</h1>
//             <form onSubmit={handleSubmit} style={styles.form}>
//                 <textarea
//                     placeholder="写下你的健身动态..."
//                     value={text}
//                     onChange={handleTextChange}
//                     style={styles.textarea}
//                 />
//                 <input type="file" accept="image/*" onChange={handleImageChange} style={styles.fileInput} />
//                 {image && <p style={styles.imageInfo}>已选择图片：{image.name}</p>}
//
//                 <button type="submit" style={styles.button} disabled={uploading}>
//                     {uploading ? '上传中...' : '分享'}
//                 </button>
//             </form>
//
//             {uploadSuccess === true && <p style={styles.successMessage}>上传成功！</p>}
//             {uploadSuccess === false && <p style={styles.errorMessage}>上传失败，请重试。</p>}
//
//             <h2>健身动态列表</h2>
//             <ul style={styles.list}>
//                 {pyqData.map((item) => (
//                     <li key={item.userid} style={styles.listItem}>
//                         <p><strong>User ID:</strong> {item.userid}</p>
//                         <p><strong>Image:</strong> <img src={item.imgUrl} alt="img"/></p>
//                         {item.imgUrl && <img src={item.imgUrl} alt="img" style={styles.image}/>}
//                         <p><strong>Content:</strong> {item.content}</p>
//                         <p><strong>Create Time:</strong> {new Date(item.createTime).toLocaleString()}</p>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };
//
// export const getServerSideProps = async () => {
//     try {
//         const res = await fetch('http://localhost:8080/api/pyq');
//         const data: Pyq[] = await res.json();
//
//         return {
//             props: {
//                 pyqData: data,
//             },
//         };
//     } catch (error) {
//         console.error('获取动态列表失败：', error);
//         return {
//             props: {
//                 pyqData: [],
//             },
//         };
//     }
// };
//
// const styles = {
//     container: {
//         padding: '20px',
//         textAlign: 'center' as const,
//     },
//     form: {
//         display: 'flex',
//         flexDirection: 'column' as const,
//         alignItems: 'center',
//         gap: '10px',
//     },
//     textarea: {
//         width: '300px',
//         height: '100px',
//         padding: '10px',
//         fontSize: '16px',
//         borderRadius: '5px',
//         border: '1px solid #ccc',
//     },
//     fileInput: {
//         fontSize: '16px',
//     },
//     imageInfo: {
//         marginTop: '10px',
//         fontStyle: 'italic',
//         color: '#555',
//     },
//     button: {
//         padding: '10px 20px',
//         fontSize: '16px',
//         backgroundColor: '#4CAF50',
//         color: 'white',
//         border: 'none',
//         borderRadius: '5px',
//         cursor: 'pointer',
//     },
//     successMessage: {
//         color: 'green',
//         marginTop: '20px',
//     },
//     errorMessage: {
//         color: 'red',
//         marginTop: '20px',
//     },
//     list: {
//         listStyleType: 'none' as const,
//         padding: 0,
//         marginTop: '20px',
//     },
//     listItem: {
//         borderBottom: '1px solid #ddd',
//         padding: '10px',
//     },
//     image: {
//         maxWidth: '100px',
//         height: 'auto',
//         marginBottom: '10px',
//     },
// };
//
// export default Share;




import React, { useState, useEffect } from 'react';

interface Pyq {
    userid: number;
    imgUrl: string;
    content: string;
    createTime: string; // ISO 时间字符串
}

interface SharePageProps {
    pyqData: Pyq[];
}

const Share: React.FC<SharePageProps> = ({ pyqData }) => {
    const [text, setText] = useState<string>(''); // 用户输入的健身动态
    const [image, setImage] = useState<File | null>(null); // 上传的图片文件
    const [uploading, setUploading] = useState<boolean>(false); // 上传状态
    const [uploadSuccess, setUploadSuccess] = useState<boolean | null>(null); // 上传结果状态
    const [formattedPyqData, setFormattedPyqData] = useState<Pyq[]>([]); // 存储格式化后的数据

    // 处理图片文件的选择
    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files && files.length > 0) {
            setImage(files[0]);
        }
    };

    // 处理文字输入
    const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setText(e.target.value);
    };

    // 提交数据
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!text && !image) {
            alert('请至少上传一张图片或输入一段文字！');
            return;
        }

        const formData = new FormData();
        if (image) {
            formData.append('image', image);
        }
        formData.append('text', text);

        try {
            setUploading(true);
            const domain = 'http://localhost:8080';
            const url = `${domain}/api/share`;
            const response = await fetch(url, {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                setUploadSuccess(true);
                setText('');
                setImage(null);
            } else {
                setUploadSuccess(false);
            }
        } catch (error) {
            setUploadSuccess(false);
            console.error('上传失败：', error);
        } finally {
            setUploading(false);
        }
    };

    // 使用 useEffect 在客户端格式化日期
    useEffect(() => {
        const formattedData = pyqData.map(item => ({
            ...item,
            createTime: new Date(item.createTime).toLocaleString(), // 仅在客户端格式化时间
        }));
        setFormattedPyqData(formattedData);
    }, [pyqData]);

    return (
        <div style={styles.container}>
            <h1>分享你的健身动态</h1>
            <form onSubmit={handleSubmit} style={styles.form}>
                <textarea
                    placeholder="写下你的健身动态..."
                    value={text}
                    onChange={handleTextChange}
                    style={styles.textarea}
                />
                <input type="file" accept="image/*" onChange={handleImageChange} style={styles.fileInput} />
                {image && <p style={styles.imageInfo}>已选择图片：{image.name}</p>}

                <button type="submit" style={styles.button} disabled={uploading}>
                    {uploading ? '上传中...' : '分享'}
                </button>
            </form>

            {uploadSuccess === true && <p style={styles.successMessage}>上传成功！</p>}
            {uploadSuccess === false && <p style={styles.errorMessage}>上传失败，请重试。</p>}

            <h2>健身动态列表</h2>
            <ul style={styles.list}>
                {formattedPyqData.map((item) => (
                    <li key={item.userid} style={styles.listItem}>
                        <p><strong>User ID:</strong> {item.userid}</p>
                        <p><strong>Image:</strong> <img src={item.imgUrl} alt="img"/></p>
                        {item.imgUrl && <img src={item.imgUrl} alt="img" style={styles.image}/>}
                        <p><strong>Content:</strong> {item.content}</p>
                        <p><strong>Create Time:</strong> {item.createTime}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export const getServerSideProps = async () => {
    try {
        const res = await fetch('http://localhost:8080/api/pyq');
        const data: Pyq[] = await res.json();

        return {
            props: {
                pyqData: data,
            },
        };
    } catch (error) {
        console.error('获取动态列表失败：', error);
        return {
            props: {
                pyqData: [],
            },
        };
    }
};

const styles = {
    container: {
        padding: '20px',
        textAlign: 'center' as const,
    },
    form: {
        display: 'flex',
        flexDirection: 'column' as const,
        alignItems: 'center',
        gap: '10px',
    },
    textarea: {
        width: '300px',
        height: '100px',
        padding: '10px',
        fontSize: '16px',
        borderRadius: '5px',
        border: '1px solid #ccc',
    },
    fileInput: {
        fontSize: '16px',
    },
    imageInfo: {
        marginTop: '10px',
        fontStyle: 'italic',
        color: '#555',
    },
    button: {
        padding: '10px 20px',
        fontSize: '16px',
        backgroundColor: '#4CAF50',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    },
    successMessage: {
        color: 'green',
        marginTop: '20px',
    },
    errorMessage: {
        color: 'red',
        marginTop: '20px',
    },
    list: {
        listStyleType: 'none' as const,
        padding: 0,
        marginTop: '20px',
    },
    listItem: {
        borderBottom: '1px solid #ddd',
        padding: '10px',
    },
    image: {
        maxWidth: '100px',
        height: 'auto',
        marginBottom: '10px',
    },
};

export default Share;
