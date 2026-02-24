"use client";
import { useContext } from "react";
import { AuthContext } from "@/context/AuthContext";
import { getUserActivities } from "@/lib/dal/activity";
import { useState, useEffect } from "react";
import Footer from "@/components/footer/Footer";
import { UserCalenderCard } from "@/components/calenderCard/UserCalenderCard";
import { FaUser } from "react-icons/fa6";



export default function UserKalenderPage() {
    const { authData } = useContext(AuthContext);
    const [activities, setActivities] = useState([]);

    useEffect(() => {
        console.log("😁authData:", authData);
        if (!authData) return;
        async function fetchActivities() {
            try {
                const result = await getUserActivities(authData.userId, authData.token);
                console.log("👍result:", result);
                setActivities(result.data.activities);
            } catch (error) {
                console.error("Error fetching activities:", error);
            }
        }
        fetchActivities();
    }, [authData]);

    return (
        <>
            <h1 className="text-center my-6">Min profil </h1>
            <section className="bg-white h-30">
                <figure className="pt-4">
                    <FaUser className="mx-auto text-gray-500 text-4xl" />
                </figure>

                <div className="text-center pt-2">
                    <p style={{ color: 'var(--background)' }}>{authData?.firstname} {authData?.lastname}</p>
                    <p style={{ color: 'var(--background)' }} className="text-sm">{authData?.role === "default" ? "medlem" : authData?.role}</p>
                </div>


            </section>

            <main className="wrapper min-h-screen">
                {!authData ? (
                    <p>Loading...</p>
                ) : activities.length === 0 ? (
                    <p className="text-center pt-4">Du har ingen aktiviteter endnu.</p>
                ) : (
                    <div className="flex flex-col gap-4 pt-4">
                        {activities.map((activity) => (
                            <UserCalenderCard
                                key={activity.id}
                                activity={activity}
                                userId={authData.userId}
                                token={authData.token}
                                onDelete={() => setActivities(activities.filter(a => a.id !== activity.id))}
                            />
                        ))}
                    </div>
                )}
            </main>
            <Footer />
        </>
    );
}