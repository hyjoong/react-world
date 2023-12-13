'use client';
import { getArticle } from '@/api/articles';
import ArticleDetailMain from '@/components/domain/article/ArticleDetailMain/ArticleDetailMain';

const ArticleDetailPage = async ({ params }: { params: { slug: string } }) => {
  // TODO: error handling
  const { article } = await getArticle(params.slug);

  return <ArticleDetailMain article={article} />;
};

export default ArticleDetailPage;
