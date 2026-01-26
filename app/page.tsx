import getHTMLContentFromMarkdown from "@/utils/markdown";
import { Hero } from "./components/Hero";

export default async function Home() {
  const resume = await getHTMLContentFromMarkdown("/resume.md");
  return (
    <>
      <Hero />
      <section className="relative mt-10">
        <div className="container relative py-12 max-w-3xl">
          <div className="mb-10 flex items-center gap-4 text-xs uppercase tracking-[0.28em] text-muted-foreground">
            <span className="h-px flex-1 bg-border" />
            <span>Resume</span>
            <span className="h-px flex-1 bg-border" />
          </div>
          <div
            className="prose mx-auto prose-headings:font-display prose-headings:tracking-[0.01em] prose-h1:text-4xl prose-h2:text-2xl prose-h3:text-lg prose-h2:mt-12 prose-h3:mt-8 prose-p:leading-7 prose-p:my-4 prose-a:text-primary prose-a:underline prose-a:underline-offset-4 prose-a:decoration-primary/40 hover:prose-a:text-primary/80 hover:prose-a:decoration-primary transition-colors prose-strong:text-foreground/90 prose-ul:pl-6 prose-li:marker:text-muted-foreground/60 prose-hr:border-border/80"
            dangerouslySetInnerHTML={{ __html: resume }}
          />
        </div>
      </section>
    </>
  );
}
