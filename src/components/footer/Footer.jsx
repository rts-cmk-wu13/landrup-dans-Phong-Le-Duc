import { FiHome } from "react-icons/fi";
import { FaUser } from "react-icons/fa6";
import { FaListUl } from "react-icons/fa";
import Link from "next/link";


export default function Footer() {

    return (
        <footer className="flex justify-between items-center bg-white p-4 footer-sticky">
            <Link href="/" className="text-gray-500 flex flex-col items-center">
                <FiHome className="text-gray-500 text-xl" />
                <p className="text-[10px] mt-1">Home</p>
            </Link>
            <Link href="/aktiviteter" className="text-gray-500 flex flex-col items-center">
                <FaListUl className="text-gray-500 text-xl" />
                <p className="text-[10px] mt-1">Aktiviteter</p>
            </Link>
            <Link href="/user-kalender" className="text-gray-500 flex flex-col items-center">
                <FaUser className="text-xl" />
                <p className="text-[10px] mt-1">Profil</p>
            </Link>
        </footer>

    )
}