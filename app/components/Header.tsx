import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/80 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <Link className="font-display text-lg tracking-[0.02em]" href="/">
          Andjelko Cvjetkovic
        </Link>
        <div className="flex items-center gap-5 text-sm text-muted-foreground">
          <a
            href="mailto:andjelko.cvjetkovic@gmail.com"
            className="transition-colors hover:text-foreground"
          >
            Email
          </a>
          <a
            href="https://github.com/andelkocvjetkovic"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-foreground"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/andelkocvjekovic/"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-foreground"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </header>
  );
}
