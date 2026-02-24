"use client";
import { useContext, useState, useEffect } from "react";
import { addUserActivity, deleteUserActivity, getUserActivities } from "@/lib/dal/activity";
import { AuthContext } from "@/context/AuthContext";

export default function JoinCourseBtn({ activityId, minAge, maxAge }) {
    const { authData } = useContext(AuthContext);
    const [isEnrolled, setIsEnrolled] = useState(false);

    useEffect(() => {
        async function checkEnrollment() {
            if (!authData) return;
            try {
                const result = await getUserActivities(authData.userId, authData.token);
                const enrolled = result.data.activities.some(a => a.id === activityId);
                setIsEnrolled(enrolled);
            } catch (error) {
                console.error("Error checking enrollment:", error);
            }
        }
        checkEnrollment();
    }, [authData, activityId]);

    const handleToggle = async () => {
        if (!authData) {
            alert("Du skal være logget ind for at tilmelde dig.");
            return;
        }

        // Alder-tjek før tilmelding
        const userAge = Number(authData.age);
        if (
            !isNaN(userAge) &&
            (userAge < Number(minAge) || userAge > Number(maxAge))
        ) {
            alert("Din alder egner sig ikke til denne aktivitet.");
            return;
        }

        try {
            if (isEnrolled) {
                const confirmUnenroll = window.confirm("Er du sikker på, at du vil afmelde?");
                if (!confirmUnenroll) return;
                await deleteUserActivity(authData.userId, activityId, authData.token);
                setIsEnrolled(false);
            } else {
                await addUserActivity(authData.userId, activityId, authData.token);
                setIsEnrolled(true);
            }
        } catch (error) {
            console.error("❌ Error:", error);
        }
    };

    return (
        <button
            onClick={handleToggle}
            className={`py-2 px-10 rounded-md ${isEnrolled ? 'bg-red-500' : 'bg-background'}`}
            style={{ boxShadow: "0 8px 24px 0 rgba(0,0,0,0.5)" }}
        >
            {isEnrolled ? "Afmeld" : "Tilmeld"}
        </button>
    );
}