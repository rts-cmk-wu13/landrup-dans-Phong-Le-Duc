
import ActivityCard from "@/components/activityCard";
import { notFound } from "next/navigation";
import { getAllActivities } from "@/lib/dal/activity";
import Footer from "@/components/footer/Footer";
import SearchBar from "@/components/search";



export default async function Page() {

    const activities = await getAllActivities();

    // fejlhåndetrining metode 2, hvis der ikke findes nogle indlæg, så render not-found.jsx
    // denne linie kan føre til din egen not-found side, eller til nexts default not-found side, alt efter hvilken du har valgt at bruge.
    if (activities.success === false) {
        throw new Error(activities.message);
    } else if (!activities.data) {
        return notFound();
    }


    return (
        <>
            <SearchBar />
            <main className="wrapper min-h-screen">

                <h1 className="mb-4">Aktiviteter</h1>

                {activities.data.map(activity => (
                    <ActivityCard activity={activity} key={activity.id} />
                ))}
            </main>

            <Footer className="w-full fixed bottom-0 left-0 z-50" />

        </>


    )
}