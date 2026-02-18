
"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";




export async function getAllEvents() {
    //Second line of defense (apart from proxy)
    const cookieStore = await cookies();
    //Guard clause
    if (!cookieStore.has("accessToken")) return redirect("/no-access");

    const response = await fetch("http://localhost:4000/events");
    if (!response.ok) {
        throw new Error({ message: "Events could not be fetched" })
    }
    const data = await response.json();

    return data;
}





export async function getAllBlogPosts() {
    try {
        const res = await fetch("http://localhost:4000/posts");
        if (!res.ok) {
            throw new Error({ message: "Something went wrong" })
        }

        if (res.status !== 200) {
            throw new Error({ message: res.statusText });
        }

        if (res.headers.get("content-type") === "application/json") {
            return await res.json();
        }

        throw new Error({ message: "Not JSON" });
    } catch (error) {
        console.log("getAllBlogPosts error:", error);
        return {
            success: false,
            message: "something went wrong on the server, try again later",
        }
    }
}





export async function getBlogPostById(id) {
    try {
        if (!id) {
            throw new Error("Missing ID")
        }

        if (Number.isNaN(Number(id))) {
            throw new Error("ID is not a number");
        }

        const res = await fetch(`http://localhost:4000/posts/${id}`);
        if (!res.ok) {
            throw new Error("Something went wrong");
        }



        // korrekt struktur virker bare ikke da api ikke returnere 404 status ved ikke fundet indlæg men status 200 med en tom body, så derfor tjekker jeg i stedet for om der er data i bodyen i page.jsx og hvis ikke så render not-found.jsx
        // if (res.status === 404) {
        //     return notFound();
        // }

        if (res.status !== 200) {
            throw new Error(res.statusText);
        }

        if (res.headers.get("content-type") === "application/json") {
            const rawData = await res.json();
            console.log("❤️", rawData);
            return rawData;

        }

        throw new Error("Not JSON");
    } catch (error) {
        console.log("getBlogPostById error:", error);
        return {
            success: false,
            message: "something went wrong on the server, try again later",
        }
    }
}





export async function deleteItem() {

    // logik som kalder api med en delete funktion

    // const res = await fetch("some/endpoint", {
    //    method: "DELETE"
    //    ....
    //})
    // revalidate
    console.log("Vi sletter nu dette element!")

    revalidatePath("/use-ref")
}
