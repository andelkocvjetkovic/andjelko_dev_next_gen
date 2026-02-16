import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/75 bg-background/78 backdrop-blur-xl">
      <div className="container flex h-[4.4rem] items-center justify-between gap-3">
        <Link className="font-display text-[1.1rem] tracking-[0.01em] text-foreground md:text-[1.75rem]" href="/">
          Andjelko Cvjetkovic
        </Link>
        <div className="flex items-center gap-2 text-sm text-muted-foreground md:gap-6">
          <a
            href="mailto:andjelko.cvjetkovic@gmail.com"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/75 bg-background/55 transition-colors hover:border-border hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/65 focus-visible:ring-offset-2 focus-visible:ring-offset-background md:h-auto md:w-auto md:rounded-none md:border-0 md:bg-transparent md:focus-visible:ring-offset-0"
            aria-label="Send email"
          >
            <Mail className="h-4 w-4 md:hidden" aria-hidden="true" />
            <span className="hidden md:inline-block border-b border-transparent pb-0.5 transition-colors hover:border-border">Email</span>
          </a>
          <a
            href="https://github.com/andelkocvjetkovic"
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/75 bg-background/55 transition-colors hover:border-border hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/65 focus-visible:ring-offset-2 focus-visible:ring-offset-background md:h-auto md:w-auto md:rounded-none md:border-0 md:bg-transparent md:focus-visible:ring-offset-0"
            aria-label="GitHub profile"
          >
            <Github className="h-4 w-4 md:hidden" aria-hidden="true" />
            <span className="hidden md:inline-block border-b border-transparent pb-0.5 transition-colors hover:border-border">GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/andelkocvjekovic/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/75 bg-background/55 transition-colors hover:border-border hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/65 focus-visible:ring-offset-2 focus-visible:ring-offset-background md:h-auto md:w-auto md:rounded-none md:border-0 md:bg-transparent md:focus-visible:ring-offset-0"
            aria-label="LinkedIn profile"
          >
            <Linkedin className="h-4 w-4 md:hidden" aria-hidden="true" />
            <span className="hidden md:inline-block border-b border-transparent pb-0.5 transition-colors hover:border-border">LinkedIn</span>
          </a>
        </div>
      </div>
    </header>
  );
}
