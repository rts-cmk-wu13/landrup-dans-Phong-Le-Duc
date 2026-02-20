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

export async function getActivityById(id) {
    try {
        if (!id) {
            throw new Error("Missing ID");
        }

        if (Number.isNaN(Number(id))) {
            throw new Error("ID is not a number");
        }

        const res = await fetch(`http://localhost:4000/api/v1/activities/${id}`);
        if (!res.ok) {
            // If your API returns 404 for not found, handle it here
            if (res.status === 404) {
                return { data: null };
            }
            throw new Error(res.statusText || "Something went wrong");
        }

        const contentType = res.headers.get("content-type") || "";
        if (contentType.includes("application/json")) {
            return { data: await res.json() };
        }

        throw new Error("Not JSON");
    } catch (error) {
        console.log("getActivityById error:", error);
        return {
            success: false,
            message: "something went wrong on the server, try again later",
        };
    }
}
