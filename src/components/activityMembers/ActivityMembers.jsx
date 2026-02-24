"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { getActivityById } from "@/lib/dal/activity";
import Link from "next/link";
import { FaUser } from "react-icons/fa";



export default function ActivityMembers() {
    const { id } = useParams();
    const [activity, setActivity] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchActivity() {
            try {
                const result = await getActivityById(id);
                setActivity(result.data);
            } catch (error) {
                setActivity(null);
            } finally {
                setLoading(false);
            }
        }
        if (id) fetchActivity();
    }, [id]);

    if (loading) return <p>Indlæser...</p>;
    if (!activity) return <p>Aktivitet ikke fundet.</p>;

    return (
        <main className="wrapper min-h-screen">

            <h3 className="font-bold text-lg mt-4">{activity.name}</h3>
            <p className="text-sm">{activity.weekday} {activity.time}</p>
            <p className="mt-4 font-semibold">Deltagere:</p>
            {activity.users && activity.users.length > 0 ? (
                <ul className="flex flex-col gap-3 mt-2 mb-4">
                    {activity.users.map(user => (

                        <li className="flex justify-between items-center rounded py-1 px-2 bg-blue-100 text-blue-800" key={user.id}>
                            <div className="flex items-center">
                                <figure className="mr-2">
                                    <FaUser className="text-blue-950" />
                                </figure>
                                <p>{user.firstname} {user.lastname}</p>
                            </div>
                            <p>{user.age} år</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="text-sm mt-2 mb-4">Ingen deltagere tilmeldt.</p>
            )}

            <Link href="/instructor-kalender" className="mt-4">
                <button className="mb-4 bg-blue-950 text-white px-4 py-1 rounded-md text-sm">
                    Tilbage til oversigt
                </button>
            </Link>
        </main>
    );
}