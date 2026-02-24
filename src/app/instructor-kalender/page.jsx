import Footer from "@/components/footer/Footer";
import InstructorCalenderClient from "@/components/profile/InstructorCalenderClient";
import ProfileHeader from "@/components/profile/ProfileHeader";
import Link from "next/link";
import { IoMdAdd } from "react-icons/io";


export default function page() {

    return (
        <div className="mb-24">
            <ProfileHeader />

            <div className="wrapper mt-4 flex justify-between ">
                <h4 className="">Mine hold</h4>

                <Link href="/opret-hold">
                    <button className="p-1.5 bg-white text-black rounded-md"><IoMdAdd /></button>
                </Link>
            </div>

            <InstructorCalenderClient />
            <Footer className="w-full fixed bottom-0 left-0 z-50" />
        </div>
    )
}