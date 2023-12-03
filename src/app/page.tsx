import React from 'react';
import { TagList } from '@/components/home/TagList';
import { ArticleCardList } from '@/components/home/ArticleCardList';
import { getArticles } from '@/api/articles';

// TODO: 다른 페이지에서도 사용하면 공용으로 사용가능하게 정의
type PageProps = {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
};

const RootPage = async ({ params, searchParams }: PageProps) => {
  const tagParam = searchParams?.tag;
  const singleTag = Array.isArray(tagParam) ? tagParam[0] : tagParam;

  const data = await getArticles(singleTag);
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
