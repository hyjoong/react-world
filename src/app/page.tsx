import React from 'react';
import { TagList } from '@/components/home/TagList';
import { getGlobalArticles } from '@/api/articles';
import { ArticleCardList } from '@/components/home/ArticleCardList';

const RootPage = async () => {
  const data = await getGlobalArticles();
  return (
    <div>
      <div className="flex">
        <ArticleCardList articles={data.articles} />
        <TagList />
      </div>
    </div>
  );
};

export default RootPage;
