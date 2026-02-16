import Image from "next/image";

export function Hero() {
  return (
    <section className="relative pt-10 md:pt-14 lg:pt-16">
      <div className="pointer-events-none absolute -left-20 top-3 h-72 w-72 rounded-full bg-primary/8 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-10 h-64 w-64 rounded-full bg-white/35 blur-3xl" />
      <div className="container relative">
        <div className="grid gap-7 rounded-[2rem] border border-border/80 bg-background/70 p-5 shadow-[0_24px_60px_rgba(31,22,14,0.06)] backdrop-blur-sm md:grid-cols-[180px,1fr] md:gap-9 md:p-9 lg:p-10">
          <div className="relative h-40 w-40 overflow-hidden rounded-xl border border-border/90 bg-muted shadow-[0_16px_32px_rgba(25,20,15,0.12)] md:h-44 md:w-44">
            <Image
              src="/avatar.png"
              alt="Andjelko Cvjetkovic"
              fill
              className="object-cover"
              style={{ objectPosition: "0% 28%" }}
              priority
            />
          </div>
          <div className="flex flex-col items-start gap-5 md:pt-1">
            <div className="inline-flex items-center rounded-full border border-border/90 bg-background/85 px-5 py-1.5 text-[11px] tracking-[0.24em] text-muted-foreground uppercase">
              Front-End Engineer
            </div>
            <h1 className="text-[3.15rem] font-display leading-[0.96] tracking-[0.01em] text-foreground sm:text-[4.1rem] lg:text-[5.2rem]">
              Andjelko Cvjetkovic
            </h1>
            <p className="max-w-[43rem] text-[1.13rem] leading-8 text-muted-foreground">
              Building structured, performant interfaces and scalable UI
              systems. I blend strong visual design with practical engineering
              to deliver fast, resilient web experiences.
            </p>
            <div className="flex flex-wrap gap-3 text-sm text-foreground">
              <span className="rounded-full border border-border/80 bg-muted/80 px-4 py-1.5">
                Design Systems
              </span>
              <span className="rounded-full border border-border/80 bg-muted/80 px-4 py-1.5">
                Accessibility
              </span>
              <span className="rounded-full border border-border/80 bg-muted/80 px-4 py-1.5">
                Performance
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
