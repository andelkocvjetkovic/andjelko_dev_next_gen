import getHTMLContentFromMarkdown from "@/utils/markdown";
import { Hero } from "./components/Hero";

export default async function Home() {
  const resume = await getHTMLContentFromMarkdown("/resume.md");
  return (
    <>
      <Hero />
      <section id="resume" className="relative pb-14 pt-10 md:pb-16 md:pt-12">
        <div className="container relative">
          <div className="mb-6 flex items-center gap-4 text-[0.78rem] tracking-[0.32em] text-muted-foreground/80 uppercase md:mb-7">
            <span className="h-px flex-1 bg-border/85" />
            <span>Resume</span>
            <span className="h-px flex-1 bg-border/85" />
          </div>
          <div className="rounded-[1.8rem] border border-border/85 bg-background/80 p-6 shadow-[0_28px_60px_rgba(28,20,12,0.06)] backdrop-blur-sm">
            <div
              className="prose mx-auto max-w-none prose-headings:font-display prose-headings:tracking-[0.01em] prose-h1:text-4xl prose-h2:text-[1.62rem] prose-h3:text-lg prose-h2:mt-14 prose-h3:mt-8 prose-p:my-4 prose-p:leading-[1.86] prose-a:text-primary prose-a:underline prose-a:underline-offset-4 prose-a:decoration-primary/40 hover:prose-a:text-primary/80 hover:prose-a:decoration-primary transition-colors prose-strong:text-foreground/90 prose-ul:pl-6 prose-li:marker:text-muted-foreground/70 prose-hr:border-border/80"
              dangerouslySetInnerHTML={{ __html: resume }}
            />
          </div>
        </div>
      </section>
    </>
  );
}
