'use client';

import { Article } from '@/types/article';
import { ArticleCard } from '../ArticleCard';
import { useDeleteFavoriteMutation } from '@/hooks/query/favorite/useDeleteFavoriteMutation';
import { usePostFavoriteMutation } from '@/hooks/query/favorite/usePostFavoriteMutation';

interface ArticleCardListProps {
  articles: Article[];
}

export const ArticleCardList = ({ articles }: ArticleCardListProps) => {
  const { mutate: postFavoriteMutation } = usePostFavoriteMutation();
  const { mutate: deleteFavoriteMutation } = useDeleteFavoriteMutation();

  const handleArticleLike = (slug: string, favorited: boolean) => {
    if (favorited) {
      deleteFavoriteMutation(slug);
    } else {
      postFavoriteMutation(slug);
    }
  };

  return (
    <div className="space-y-20">
      {articles?.map((article, index) => (
        <ArticleCard
          key={index}
          article={article}
          onClick={() => handleArticleLike(article.slug, article.favorited)}
        />
      ))}
    </div>
  );
};
