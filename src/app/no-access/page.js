import Link from "next/link";

export default function NoAccess() {

    return (
        <main>
            <h1 className="text-red-400 uppercase">Adgang nægtet</h1>
            <p className="my-8">Du har ikke adgang til denne side. Log ind for at fortsætte.</p>
            <Link href="/login" className="text-blue-400 underline">Gå til login side</Link>
        </main>
    )
}