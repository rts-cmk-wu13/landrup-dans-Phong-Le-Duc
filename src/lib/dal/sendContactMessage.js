"use server";

export async function sendContactMessage(data) {
    try {
        const response = await fetch("http://localhost:4000/api/v1/messages", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        return response;
    } catch (error) {
        console.error("Error submitting contact message:", error);
        throw error;
    }
}