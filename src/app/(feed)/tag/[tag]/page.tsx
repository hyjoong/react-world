import { getArticles } from '@/api/articles';
import { ArticleCardList } from '@/components/home/ArticleCardList';

type PageProps = {
  params: { [key: string]: string | string[] | undefined };
};

const TagPage = async ({ params }: PageProps) => {
  const { tag } = params;
  const singleTag = Array.isArray(tag) ? tag[0] : tag;

  const data = await getArticles(singleTag);

  return <ArticleCardList articles={data.articles} />;
};

export default TagPage;
