"use client";
import { useContext } from "react";
import { AuthContext } from "@/context/AuthContext";
import { getUserActivities } from "@/lib/dal/activity";
import { useState, useEffect } from "react";
import Footer from "@/components/footer/Footer";


export default function UserKalenderPage() {
    const { authData } = useContext(AuthContext);
    const [activities, setActivities] = useState([]);

    useEffect(() => {
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
            <main className="wrapper min-h-screen">
                <h1>Min Kalender</h1>
                {activities.length === 0 ? (
                    <p>Du har ingen aktiviteter endnu.</p>
                ) : (
                    <div className="flex flex-col gap-4">
                        {activities.map((activity) => (
                            <div key={activity.id} className="border p-4 rounded">
                                <h3>{activity.name}</h3>
                                <p>{activity.weekday} kl. {activity.time}</p>
                            </div>
                        ))}
                    </div>
                )}
            </main>
            <Footer />
        </>
    );
}