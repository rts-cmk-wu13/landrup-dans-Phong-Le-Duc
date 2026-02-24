import Link from "next/link";
import { deleteUserActivity } from "@/lib/dal/activity";

export function UserCalenderCard({ activity, userId, token, onDelete }) {

    const handleDelete = async () => {
        try {
            await deleteUserActivity(userId, activity.id, token);
            console.log("✅ Activity deleted!");
            onDelete();
        } catch (error) {
            console.error("❌ Error deleting:", error);
        }
    };

    return (
        <article className="user-calender-card border p-4 rounded flex justify-between items-center bg-blue-100 text-blue-800">
            <div>
                <h3>{activity.name}</h3>
                <p>{activity.weekday} kl. {activity.time}</p>
            </div>
            <div className="flex flex-col gap-2">
                <button
                    onClick={handleDelete}
                    className="bg-red-500 text-white px-4 py-2 rounded shadow-2xl"
                >
                    Afmeld
                </button>
                <Link href={`/aktiviteter/${activity.id}`}>
                    <button className="bg-blue-950 text-white px-4 py-2 rounded shadow-2xl w-full">
                        Detaljer
                    </button>
                </Link>
            </div>
        </article>
    );
}