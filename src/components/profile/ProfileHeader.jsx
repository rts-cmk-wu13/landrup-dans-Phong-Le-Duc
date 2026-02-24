"use client";
import { FaUser } from "react-icons/fa6";
import { useContext } from "react";
import { AuthContext } from "@/context/AuthContext";


export default function ProfileHeader() {

    const { authData } = useContext(AuthContext);
    console.log("authData:", authData);

    return (
        <>
            <h1 className="text-center my-6">Min profil </h1>
            <section className="bg-white h-30">
                <figure className="pt-4">
                    <FaUser className="mx-auto text-blue-950 text-4xl" />
                </figure>

                <div className="text-center pt-2">
                    <p style={{ color: 'var(--background)' }}>{authData?.firstname} {authData?.lastname}</p>
                    <p style={{ color: 'var(--background)' }} className="text-sm">{authData?.role === "default" ? "medlem" : authData?.role}</p>
                </div>


            </section>
        </>
    )
}