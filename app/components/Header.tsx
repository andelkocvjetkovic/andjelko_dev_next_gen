
import Link from "next/link";

export function Header() {
    return (
        <header className="sticky top-4 z-50 mx-auto w-[95%] max-w-5xl rounded-full border border-white/10 bg-white/5 shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] backdrop-blur-md backdrop-saturate-150 supports-[backdrop-filter]:bg-white/5">
            <div className="flex h-16 items-center justify-between px-6">
                <div className="mr-4 flex">
                    <Link className="mr-6 flex items-center space-x-2 font-bold" href="/">
                        Andjelko Cvjetkovic
                    </Link>
                </div>
                <div className="flex items-center space-x-4 text-sm font-medium">
                    <a
                        href="mailto:andjelko.cvjetkovic@gmail.com"
                        className="transition-colors hover:text-primary"
                    >
                        Email
                    </a>
                    <a
                        href="https://github.com/andelkocvjetkovic"
                        target="_blank"
                        rel="noreferrer"
                        className="transition-colors hover:text-primary"
                    >
                        GitHub
                    </a>
                    <a
                        href="https://www.linkedin.com/in/andelkocvjekovic/"
                        target="_blank"
                        rel="noreferrer"
                        className="transition-colors hover:text-primary"
                    >
                        LinkedIn
                    </a>
                </div>
            </div>
        </header>
    );
}
