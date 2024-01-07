'use client';

import styles from './Login.module.css';
import Header from '../components/Header/Header';
import { useSession, signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function Login() {
    const { data, status } = useSession();
    const route = useRouter();

    if (status === 'loading') {
         return <div className={styles.loading}>Loading...</div>
       
    }

    status === 'authenticated' && route.push('/');

    return (
        <div>
            <Header />
            <div className={styles.login}>
                <div className={styles.google}>
                    <button onClick={() => signIn('google')}>
                        <img src="./google.png" alt="Google" width={60} />
                        Connect with Google
                    </button>
                </div>

                <div className={styles.github}>
                    <button onClick={() => signIn('github')}>
                        <img src="./github.png" alt="Github" width={60} />
                        Connect with Github
                    </button>
                </div>
            </div>
        </div>
    );
}
