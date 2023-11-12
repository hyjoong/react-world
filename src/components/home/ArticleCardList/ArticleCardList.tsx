'use client';

import { Article } from '@/types/article';
import { ArticleCard } from '../ArticleCard';

interface ArticleCardListProps {
  articles: Article[];
}

export const ArticleCardList = ({ articles }: ArticleCardListProps) => {
  return (
    <div className="space-y-20">
      {articles?.map((article, index) => (
        <ArticleCard key={index} article={article} />
      ))}
    </div>
  );
};
