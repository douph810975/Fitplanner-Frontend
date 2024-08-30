// import React from 'react';
// import Layout from '@/components/Layout';
//
// const HomePage: React.FC = () => {
//     return (
//         <Layout>
//             <h1>Welcome to Acme Corporation</h1>
//         </Layout>
//     );
// };
//
// export default HomePage;

import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Home = () => {
    const router = useRouter();

    useEffect(() => {
        router.push('/login');
    }, [router]);

    return null;
};

export default Home;
