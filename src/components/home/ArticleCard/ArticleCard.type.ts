import { Article } from '@/types/article';

export interface ArticleCardProps {
  article: Article;
  onClick: (slug: string) => void;
}
