// pages/pyq.tsx
import { GetServerSideProps } from 'next';
import React from 'react';
import { Pyq } from '@/types/Pyq';

interface PyqPageProps {
    pyqData: Pyq[];
}

export const getServerSideProps: GetServerSideProps = async () => {
    const res = await fetch('http://localhost:8080/api/pyq');
    const data: Pyq[] = await res.json();

    return {
        props: {
            pyqData: data,
        },
    };
};

const PyqPage: React.FC<PyqPageProps> = ({ pyqData }) => {
    return (
        <div>
            <h1>朋友圈动态</h1>
            <ul>
                {pyqData.map((item) => (
                    <li key={item.userid}>
                        <p><strong>User ID:</strong> {item.userid}</p>
                        <p><strong>Image:</strong> <img src={item.imgUrl} alt="img" /></p>
                        <p><strong>Content:</strong> {item.content}</p>
                        <p><strong>Create Time:</strong> {new Date(item.createTime).toLocaleString()}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PyqPage;
