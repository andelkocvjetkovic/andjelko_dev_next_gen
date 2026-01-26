import Image from "next/image";

export function Hero() {
  return (
    <section className="pt-10 md:pt-16 lg:pt-20">
      <div className="container grid gap-10 md:grid-cols-[140px,1fr] md:items-start">
        <div className="relative h-36 w-36 overflow-hidden rounded-md border border-border shadow-[0_20px_45px_rgba(25,20,15,0.12)]">
          <Image
            src="/avatar.png"
            alt="Andjelko Cvjetkovic"
            fill
            className="object-cover"
            style={{ objectPosition: "0% 28%" }}
            priority
          />
        </div>
        <div className="flex flex-col items-start gap-5">
          <div className="inline-flex items-center gap-3 rounded-full border border-border bg-background/80 px-4 py-1 text-xs tracking-[0.24em] text-muted-foreground uppercase">
            Front-End Engineer
          </div>
          <h1 className="text-4xl font-display tracking-[0.02em] text-foreground lg:text-6xl">
            Andjelko Cvjetkovic
          </h1>
          <p className="max-w-[50rem] text-base text-muted-foreground sm:text-lg sm:leading-8">
            Building structured, performant interfaces and scalable UI systems. I
            blend strong visual design with practical engineering to deliver fast,
            resilient web experiences.
          </p>
          <div className="flex flex-wrap gap-3 text-sm text-foreground">
            <span className="rounded-full border border-border bg-muted px-3 py-1">Design Systems</span>
            <span className="rounded-full border border-border bg-muted px-3 py-1">Accessibility</span>
            <span className="rounded-full border border-border bg-muted px-3 py-1">Performance</span>
          </div>
        </div>
      </div>
    </section>
  );
}
