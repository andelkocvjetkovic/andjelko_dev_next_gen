import getHTMLContentFromMarkdown from "@/utils/markdown";
import Image from "next/image";

export default async function Home() {
  const resume = await getHTMLContentFromMarkdown("/resume.md");
  return (
    <main>
      <div className="prose prose-stone mx-auto lg:prose-lg prose-p:text-balance prose-headings:text-balance py-4">
        <header className="flex gap-x-8 items-center">
          <Image
            src="/avatar.png"
            alt="Andjelko Cvjetkovic"
            width={130}
            height={100}
            className="rounded object-cover object-center h-auto"
          />
          <div>
            <h1>Andjelko Cvjetkvic</h1>
            <div className="flex flex-col">
              <a href="mailto:andjelko.cvjetkovic@gmail.com">
                andjelko.cvjetkovic@gmail.com
              </a>
              <a href="https://github.com/andelkocvjetkovic">github</a>
              <a href="https://www.linkedin.com/in/andelkocvjekovic/">
                linkedin
              </a>
            </div>
          </div>
        </header>
        <div className="" dangerouslySetInnerHTML={{ __html: resume }} />
      </div>
    </main>
  );
}
