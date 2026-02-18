import Image from "next/image";
// import Link from "next/link";
import LoginBtn from "../buttons/loginBtn";

export default function Hero() {

    return (
        <div className="relative w-full h-screen">

            <Image
                src="/assets/heroimg.jpg"
                alt="Hero Image"
                fill={true}
                objectFit="cover"
                className="z-0" />

            <div className="absolute z-10 top-40 left-1/2 transform -translate-x-1/2  flex flex-col items-center justify-center">
                <figure className="mx-auto mb-8">
                    <Image src="/landrupLogo.png" alt="Logo" width={48} height={48} />
                </figure>
                <figure className="mx-auto">
                    <Image src="/landrupDans.png" alt="Logo" width={148} height={148} />
                </figure>

                <div className="absolute right-0 top-30 border-t-4 border-white border-solid w-70  "></div>
                <LoginBtn className="mt-20" />

            </div>



        </div>
    )
}