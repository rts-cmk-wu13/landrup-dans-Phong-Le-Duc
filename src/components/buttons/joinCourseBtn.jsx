"use client";
import { useContext } from "react";
import { addUserActivity } from "@/lib/dal/activity";
import { AuthContext } from "@/context/AuthContext";

export default function JoinCourseBtn({ activityId }) {

    const { authData } = useContext(AuthContext);

    const handleClick = async () => {
        if (!authData) {
            console.log("😢User not logged in");
            return;
        }
        console.log("❤️authData:", authData);
        console.log("👌activityId received:", activityId);

        try {
            await addUserActivity(authData.userId, activityId, authData.token);
            console.log("✅ Activity added!");
        } catch (error) {
            console.error("❌ Error:", error);
        }
    };

    return (
        <button onClick={handleClick} className="py-2 px-10 bg-background  rounded-md" style={{ boxShadow: "0 8px 24px 0 rgba(0,0,0,0.5)" }}>Tilmeld</button>
    )
}