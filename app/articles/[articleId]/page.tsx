import { getAllArticles, getArticle } from '../articles.helpers';

export async function generateStaticParams() {
  const allArticles = getAllArticles();
  return allArticles.map(article => ({
    articleId: article.id,
  }));
}

export default async function article({ params }: {params: { articleId: string }}) {
  const articleId = params?.articleId;
  const article = await getArticle(articleId);
  console.log('--------article');

  return (
    <div className="">
      <article className="prose lg:prose-xl prose-stone" dangerouslySetInnerHTML={{ __html: article.content.value }} />
    </div>
  );
}
