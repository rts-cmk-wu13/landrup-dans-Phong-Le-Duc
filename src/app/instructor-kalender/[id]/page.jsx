import ActivityMembers from "@/components/activityMembers/ActivityMembers";
import Footer from "@/components/footer/Footer";
import ProfileHeader from "@/components/profile/ProfileHeader";


export default function Page() {
    return (
        <>
            <div className="mb-24">
                <ProfileHeader />

                <ActivityMembers />
                <Footer className="w-full fixed bottom-0 left-0 z-50" />
            </div>
        </>
    );
}