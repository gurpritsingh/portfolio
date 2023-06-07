import Link from 'next/link';
import { getAllArticles } from './articles.helpers';

export default function Articles() {
  const allArticles = getAllArticles();
  console.log('all articles -------')
  return (
    <div className="">
      {allArticles.map((post) => {
        const { id, title, date } = post;
        return (<div><Link href={`/articles/${encodeURIComponent(id)}`}>{title}</Link></div>);
      })}
    </div>
  )
};
