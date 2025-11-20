import Image from "next/image";

export function Hero() {
    return (
        <section className="py-12 md:py-20 lg:py-24">
            <div className="container flex flex-col items-center text-center">
                <div className="relative mb-8 h-32 w-32 overflow-hidden rounded-full border-4 border-primary/20">
                    <Image
                        src="/avatar.png"
                        alt="Andjelko Cvjetkovic"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-4">
                    Andjelko Cvjetkovic
                </h1>
                <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
                    Software Developer with 4 years of experience building high-performance,
                    user-friendly applications. Passionate about solving customer needs
                    through efficient, scalable solutions.
                </p>
            </div>
        </section>
    );
}
