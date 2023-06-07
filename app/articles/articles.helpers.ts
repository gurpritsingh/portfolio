import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkHtml from 'remark-html';

export const getAllArticles = () => {
  const postsDirectory = path.join(process.cwd(), '/markdownFiles');
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map(fileName => {
    // remove .md from file name to get id
    const id = fileName.replace(/\.md$/, '');

    //read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf-8');
    const parsedMd = matter(fileContents);
    const blogPost: BlogPost = {
      id,
      title: parsedMd.data.title,
      date: parsedMd.data.date,
    };
    return blogPost;
  });

  return allPostsData;
};

export const getArticle = async (id: string) => {
  const postsDirectory = path.join(process.cwd(), '/markdownFiles');
  const fullPath = decodeURIComponent(path.join(postsDirectory, `${id}.md`));
  const fileContent = fs.readFileSync(fullPath, 'utf-8');
  const parsedMd = matter(fileContent);
  const processedContent = await remark().use(remarkHtml).process(parsedMd.content);
  const blogPost: BlogPost & {content: { value: {} }} = {
    id,
    title: parsedMd.data.title,
    date: parsedMd.data.date,
    content: processedContent,
  };
  return blogPost;
};
