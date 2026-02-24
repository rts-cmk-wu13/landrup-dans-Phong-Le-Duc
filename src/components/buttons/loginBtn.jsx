"use client";
import Link from 'next/link';
import { useContext } from 'react';
import { useRouter } from 'next/navigation';
import { AuthContext } from '@/context/AuthContext';

export default function LoginBtn() {
    const { authData, setAuthData } = useContext(AuthContext);
    const router = useRouter();

    const handleLogout = async () => {
        setAuthData(null);
        await fetch('/api/logout', { method: 'POST' });
        router.push('/');
    };

    return (
        <div className='mt-80'>
            {authData ? (
                <button
                    onClick={handleLogout}
                    className="py-2 px-10  bg-blue-950 text-white rounded-md"
                    style={{ boxShadow: "0 8px 24px 0 rgba(0,0,0,0.5)" }}
                >
                    Log ud
                </button>
            ) : (
                <Link href="/login">
                    <button className="py-2 px-10 bg-gray-100 text-black rounded-md" style={{ boxShadow: "0 8px 24px 0 rgba(0,0,0,0.5)" }}>Log ind her</button>
                </Link>
            )}
        </div>
    );
}