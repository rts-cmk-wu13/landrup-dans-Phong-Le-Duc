import Link from 'next/link';

export default function LoginBtn() {

    return (
        <Link href="/login">
            <button className="py-2 px-12 bg-gray-100 text-black mt-70 rounded-md" style={{ boxShadow: "0 8px 24px 0 rgba(0,0,0,0.5)" }}>Log ind her</button>
        </Link>
    )
}