import React from 'react';
import { TagList } from '@/components/home/TagList';
import { TEMP_TAGS } from '@/constants';
import { getGlobalArticles } from '@/api/articles';
import { ArticleCardList } from '@/components/home/ArticleCardList';

const RootPage = async () => {
  const data = await getGlobalArticles();
  return (
    <div>
      <div className="flex">
        <ArticleCardList articles={data.articles} />
        <TagList tags={TEMP_TAGS} />
      </div>
    </div>
  );
};

export default RootPage;
