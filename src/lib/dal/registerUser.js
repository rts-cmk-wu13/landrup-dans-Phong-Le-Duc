"use server";

export async function registerUser(data) {
    try {
        const body = new URLSearchParams();
        body.set("username", data.username);
        body.set("password", data.password);
        body.set("firstname", data.firstname);
        body.set("lastname", data.lastname);
        body.set("age", String(data.age));
        body.set("role", data.role || "default");

        const response = await fetch("http://localhost:4000/api/v1/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body,
        });

        return response;
    } catch (error) {
        console.error("Error submitting register request:", error);
        throw error;
    }
}
