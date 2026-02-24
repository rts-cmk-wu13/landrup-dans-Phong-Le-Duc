"use client";
import { useEffect, useState } from "react";

import { getAllActivities } from "@/lib/dal/activity";
import Link from "next/link";


export default function InstructorCalenderClient() {
    const [activities, setActivities] = useState([]);

    useEffect(() => {
        async function fetchActivities() {
            try {
                const result = await getAllActivities();
                setActivities(result.data);
            } catch (error) {
                console.error("Error fetching activities:", error);
            }
        }
        fetchActivities();
    }, []);

    return (
        <>

            <main className="wrapper min-h-screen ">
                {activities.length === 0 ? (
                    <p className="text-center pt-4">Ingen aktiviteter fundet.</p>
                ) : (
                    <div className="flex flex-col gap-4 pt-4 ">
                        {activities.map(activity => (
                            <div key={activity.id} className="border rounded p-4  bg-blue-100 text-blue-800">
                                <h4 className="">{activity.name}</h4>
                                <p>{activity.weekday} {activity.time}</p>

                                <div className="flex justify-between mt-2 text-sm">
                                    <p>Tilmeldte: {activity.users ? activity.users.length : 0}</p>
                                    <p className="">Max deltagere: 12</p>
                                </div>
                                <Link href={`/instructor-kalender/${activity.id}`}>
                                    <button className="bg-blue-950 text-white px-4 py-1 rounded-md shadow-2xl text-sm mt-2 ">
                                        Deltagerliste
                                    </button>
                                </Link>
                            </div>
                        ))}
                    </div>
                )}
            </main>
        </>
    );
}