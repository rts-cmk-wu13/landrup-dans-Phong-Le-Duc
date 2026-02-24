"use client";

import { z } from "zod/v4";
import { registerSchema } from "@/lib/schemas";
import { createActivitySchema } from "@/lib/schemas";
import { useState } from "react";
import { registerUser } from "@/lib/dal/registerUser";
import { createActivity } from "@/lib/dal/activity";

import { useRouter } from "next/navigation";

export default function FormCreateActivity() {
    const [errors, setErrors] = useState({});
    const router = useRouter();

    async function handleRegister(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData);
        const result = createActivitySchema.safeParse(data);

        if (!result.success) {
            const errors = z.treeifyError(result.error);
            setErrors(errors.properties || {});
        } else {
            setErrors({});
            const response = await createActivity(result.data);

            if (!response.ok) {
                setErrors({ form: { errors: [response.data.message || response.data.error || "Noget gik galt"] } });
            } else {
                router.replace("/aktiviteter");
            }
        }
    }

    return (
        <section className="my-8 wrapper">
            <h3>Opret aktivitet</h3>

            <form onSubmit={handleRegister} className="flex flex-col gap-2 max-w-md rounded-sm">


                <div className="flex flex-col w-full">
                    <label htmlFor="name" className="mb-1 text-sm">Aktivitetsnavn</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Aktivitetsnavn"
                        required
                        className="bg-white border border-gray-300 text-black rounded-sm px-3 py-2 focus:outline-none focus:border-blue-400"
                    />
                </div>


                <div className="flex flex-col w-full">
                    <label htmlFor="description" className="mb-1 text-sm">Beskrivelse</label>
                    <textarea
                        id="description"
                        name="description"
                        placeholder="Beskrivelse"
                        required
                        className="bg-white border border-gray-300 text-black rounded-sm px-3 py-2 focus:outline-none focus:border-blue-400"
                    />
                </div>


                <div className="flex flex-col w-full">
                    <label htmlFor="weekday" className="mb-1 text-sm">Ugedag</label>
                    <select
                        id="weekday"
                        name="weekday"
                        required
                        className="bg-white border border-gray-300 text-black rounded-sm px-3 py-2 focus:outline-none focus:border-blue-400"
                    >
                        <option value="">Vælg ugedag</option>
                        <option value="mandag">Mandag</option>
                        <option value="tirsdag">Tirsdag</option>
                        <option value="onsdag">Onsdag</option>
                        <option value="torsdag">Torsdag</option>
                        <option value="fredag">Fredag</option>
                        <option value="lørdag">Lørdag</option>
                        <option value="søndag">Søndag</option>
                    </select>
                </div>


                <div className="flex flex-col w-full">
                    <label htmlFor="time" className="mb-1 text-sm">Tidspunkt</label>
                    <input
                        type="time"
                        id="time"
                        name="time"
                        required
                        className="bg-white border border-gray-300 text-black rounded-sm px-3 py-2 focus:outline-none focus:border-blue-400"
                    />
                </div>


                <div className="flex flex-col w-full">
                    <label htmlFor="minAge" className="mb-1 text-sm">Alder (min.)</label>
                    <input
                        type="number"
                        id="minAge"
                        name="minAge"
                        min="0"
                        placeholder="Minimumsalder"
                        required
                        className="bg-white border border-gray-300 text-black rounded-sm px-3 py-2 focus:outline-none focus:border-blue-400"
                    />
                </div>


                <div className="flex flex-col w-full">
                    <label htmlFor="maxAge" className="mb-1 text-sm">Alder (max.)</label>
                    <input
                        type="number"
                        id="maxAge"
                        name="maxAge"
                        min="0"
                        placeholder="Maksimal alder"
                        required
                        className="bg-white border border-gray-300 text-black rounded-sm px-3 py-2 focus:outline-none focus:border-blue-400"
                    />
                </div>


                <div className="flex flex-col w-full">
                    <label htmlFor="instructor" className="mb-1 text-sm">Instruktør</label>
                    <input
                        type="text"
                        id="instructor"
                        name="instructor"
                        placeholder="Instruktørnavn"
                        required
                        className="bg-white border border-gray-300 text-black rounded-sm px-3 py-2 focus:outline-none focus:border-blue-400"
                    />
                </div>


                <div className="flex flex-col w-full">
                    <label htmlFor="maxParticipants" className="mb-1 text-sm">Max antal deltagere</label>
                    <input
                        type="number"
                        id="maxParticipants"
                        name="maxParticipants"
                        min="1"
                        placeholder="Max deltagere"
                        required
                        className="bg-white border border-gray-300 text-black rounded-sm px-3 py-2 focus:outline-none focus:border-blue-400"
                    />
                </div>

                <button type="submit" className="bg-blue-300 p-2 w-1/2 mx-auto rounded-md" style={{ boxShadow: "0 8px 24px 0 rgba(0,0,0,0.5)" }}>
                    Opret aktivitet
                </button>
                <p className="text-red-600 text-sm min-h-[1.5em]">{errors && errors?.form?.errors[0]}</p>
            </form>
        </section>
    )
}