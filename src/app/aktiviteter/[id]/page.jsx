import ActivityDetail from "@/components/activityDetail";
import Footer from "@/components/footer/Footer";
import { getActivityById } from "@/lib/dal/activity"
import { notFound } from "next/navigation";

export default async function page({ params }) {

    const { id } = await params
    const activityResult = await getActivityById(id)

    if (activityResult.success === false) {
        throw new Error(activityResult.message);
    } else if (!activityResult.data) {
        return notFound();
    }


    return (
        <>
            <main className="mb-24">
                <ActivityDetail activity={activityResult.data} />
            </main>
            <Footer />
        </>
    )
}