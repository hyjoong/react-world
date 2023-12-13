import { FeedResponse } from '@/types/article';

const ArticleDetailMain = ({ article }: FeedResponse) => {
  return (
    <div>
      <p>{article.createdAt}</p>
      <p>{article.description}</p>
    </div>
  );
};

export default ArticleDetailMain;
