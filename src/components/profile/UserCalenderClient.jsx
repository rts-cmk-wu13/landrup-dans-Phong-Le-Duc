"use client";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "@/context/AuthContext";
import { getUserActivities } from "@/lib/dal/activity";
import { UserCalenderCard } from "@/components/calenderCard/UserCalenderCard";
import ProfileHeader from "./ProfileHeader";

export default function UserCalenderClient() {
    const { authData } = useContext(AuthContext);
    const [activities, setActivities] = useState([]);

    useEffect(() => {
        console.log("UserCalenderClient authData:", authData);
        if (!authData) return;
        async function fetchActivities() {
            try {
                const result = await getUserActivities(authData.userId, authData.token);
                console.log("UserCalenderClient activities:", result);
                setActivities(result.data.activities);
            } catch (error) {
                console.error("Error fetching activities:", error);
            }
        }
        fetchActivities();
    }, [authData]);

    return (
        <>
            <ProfileHeader />

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
        </>
    );
}
