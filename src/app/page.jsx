import Hero from "@/components/hero";
import Image from "next/image";


export default function Home() {

  return (

    <main>

      <Hero />
      <h1>Vores holdtyper</h1>
      <article>
        <h3>Børnehold</h3>
        <figure>
          <Image src="/assets/boernedans.jpg" alt="Børnehold" width={600} height={400} />
        </figure>

      </article>

    </main>

  );
}
