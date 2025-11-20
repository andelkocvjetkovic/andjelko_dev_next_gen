import getHTMLContentFromMarkdown from "@/utils/markdown";
import { Hero } from "./components/Hero";

export default async function Home() {
  const resume = await getHTMLContentFromMarkdown("/resume.md");
  return (
    <>
      <Hero />
      <div className="container py-12 max-w-3xl">
        <div
          className="prose prose-stone dark:prose-invert mx-auto prose-headings:font-bold prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl prose-a:text-primary hover:prose-a:text-primary/80 transition-colors"
          dangerouslySetInnerHTML={{ __html: resume }}
        />
      </div>
    </>
  );
}
