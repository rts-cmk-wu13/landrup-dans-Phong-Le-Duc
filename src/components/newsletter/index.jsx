"use client";

import { useState } from "react";
import { emailSchema } from "@/lib/schemas";

export default function Newsletter() {
    const [email, setEmail] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();


        const result = emailSchema.safeParse({ email });
        if (!result.success) {
            setMessage(result.error.issues?.[0]?.message || "forkert email");
            return;
        }

        // Set loading state
        setIsLoading(true);
        setMessage("");

        try {
            // Send to API
            const response = await fetch("http://localhost:4000/api/v1/newsletter", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email }),
            });

            console.log("Response status:", response.status);
            console.log("Response ok:", response.ok);

            if (!response.ok) {
                throw new Error(`Failed to subscribe: ${response.status}`);
            }

            console.log("Success!");
            setMessage("Success! Check your email.");
            setEmail("");
        } catch (error) {
            console.error("Error:", error);
            setMessage(error.message || "An error occurred");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className=" flex justify-center mt-4 w-full">
            <form onSubmit={handleSubmit} className="w-full flex gap-2">
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={isLoading}
                    className="p-2 rounded border border-gray-300 bg-white text-gray-700  w-full"
                />
                <button type="submit" disabled={isLoading} className="bg-white text-black text-dinmaegler-blue p-2 rounded disabled:opacity-50">

                    {isLoading ? "Sender..." : "Tilmeld"}
                </button>
            </form>
            {message && <p className="text-sm mt-2 text-gray-700">{message}</p>}
        </div>
    );
}