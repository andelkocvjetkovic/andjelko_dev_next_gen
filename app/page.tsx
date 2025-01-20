import getHTMLContentFromMarkdown from "@/utils/markdown";

export default async function Home() {
  const resume = await getHTMLContentFromMarkdown("/resume.md");
  return (
    <div
      className="container prose prose-neutral prose-p:text-balance prose-headings:text-balance prose-invert"
      dangerouslySetInnerHTML={{ __html: resume }}
    />
  );
}
