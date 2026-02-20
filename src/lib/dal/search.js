"use server";

export async function getAllActivities() {
    try {
        const res = await fetch("http://localhost:4000/api/v1/activities");

        if (!res.ok) {
            throw new Error(res.statusText || "Something went wrong");
        }

        const contentType = res.headers.get("content-type") || "";
        if (contentType.includes("application/json")) {
            const data = await res.json();
            return { data };
        }

        throw new Error("Not JSON");
    } catch (error) {
        console.log("getAllActivities error:", error);
        return {
            success: false,
            message: "something went wrong on the server, try again later",
        };
    }
}