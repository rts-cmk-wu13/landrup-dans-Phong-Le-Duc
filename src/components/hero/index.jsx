import Image from "next/image";
import Link from "next/link";

export default function Hero() {

    return (
        <div className="relative w-full h-screen">

            <Image
                src="/assets/heroimg.jpg"
                alt="Hero Image"
                fill={true}
                objectFit="cover"
                className="z-0" />

            <div className="absolute top-20 left-1/2 transform -translate-x-1/2 z-10">
                <figure>
                    <Image src="/landrupLogo.png" alt="Logo" width={48} height={48} />
                </figure>
                <figure>
                    <Image src="/landrupDans.png" alt="Logo" width={148} height={148} />
                </figure>
            </div>


        </div>
    )
}