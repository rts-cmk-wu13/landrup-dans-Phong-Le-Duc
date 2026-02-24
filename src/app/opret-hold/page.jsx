// import FormCreateActivity from "@/components/forms/formCreateActivity";
import Link from "next/link";

export default function page() {

    return (
        <>
            <h1 className="mx-auto my-10 text-center">Kommer snart!</h1>
            {/* <FormCreateActivity /> */}
            <Link href="/instructor-kalender" className="mx-auto my-10 text-center block ">Tilbage til kalender</Link>
        </>
    )
}