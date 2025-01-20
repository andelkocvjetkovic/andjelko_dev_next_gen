import { readFile } from "node:fs/promises";
import path from "path";
import { remark } from "remark";
import html from "remark-html";

async function getHTMLContentFromMarkdown(filePath: string) {
  const fullPath = path.join(process.cwd(), filePath);
  const fileContents = await readFile(fullPath, {
    encoding: "utf-8",
  });
  const processedContent = await remark().use(html).process(fileContents);
  const contentHtml = processedContent.toString();

  return contentHtml;
}

export default getHTMLContentFromMarkdown;
