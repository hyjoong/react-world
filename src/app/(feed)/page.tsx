import { ArticleCardList } from '@/components/home/ArticleCardList';
import { getArticles } from '@/api/articles';
import { getAllTags } from '@/api/tag';

const RootPage = async () => {
  const data = await getArticles();

  return <ArticleCardList articles={data.articles} />;
};

export default RootPage;
