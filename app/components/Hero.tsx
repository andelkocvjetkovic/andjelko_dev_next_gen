import Image from "next/image";

export function Hero() {
  return (
    <section className="py-12 md:py-20 lg:py-24">
      <div className="container flex flex-col items-center text-center">
        <div className="relative mb-8 h-36 w-36 overflow-hidden rounded-full border-4 border-primary/20">
          <Image
            src="/avatar.png"
            alt="Andjelko Cvjetkovic"
            fill
            className="object-cover"
            style={{ objectPosition: "0% 28%" }}
            priority
          />
        </div>
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-4">
          Andjelko Cvjetkovic
        </h1>
        <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          Front-End Engineer architecting the next generation of intelligent
          user interfaces. I combine modern design systems with AI-driven
          workflows to build immersive, high-performance web experiences.
        </p>
      </div>
    </section>
  );
}
