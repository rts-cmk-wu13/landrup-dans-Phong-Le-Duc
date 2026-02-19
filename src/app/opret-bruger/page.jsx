import Image from "next/image";
import Link from "next/link";

import FormRegister from "@/components/forms/formRegister";

export default function page() {

    return (
        <>
            <>
                <div className="flex flex-col items-center justify-center gap-4 pt-20">
                    <figure className="mx-auto ">
                        <Image src="/landrupLogo.png" alt="Logo" width={48} height={48} />
                    </figure>
                    <figure className="mx-auto mb-2">
                        <Image src="/landrupDans.png" alt="Logo" width={148} height={148} />
                    </figure>
                </div>

                <div className="h-2  flex items-center ">
                    <div className="border border-solid justify-start w-3/4"></div>
                </div>

                <FormRegister />



            </>
        </>
    )
}