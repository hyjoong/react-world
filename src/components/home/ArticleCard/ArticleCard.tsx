import React from 'react';
import Link from 'next/link';
import { Badge } from '@/components/ui/Badge/Badge';
import { TEMP_CONTENT } from '@/constants';
import { ArticleCardProps } from './ArticleCard.type';

export const ArticleCard = ({ article }: ArticleCardProps) => {
  const { title, description, tagList } = article;

  return (
    <div className="flex items-center h-[200px] gap-[50px]">
      <div className="min-w-[200px] min-h-[200px] bg-slate-500"></div>
      <div className="flex-col">
        <div className="flex items-center">
          <span className="text-sm text-gray-400 mr-2">January 20th</span>
          {tagList?.map((tag, index) => (
            <Badge key={index} variant="outline">
              {tag}
            </Badge>
          ))}
        </div>
        <Link href="/post/1">
          <p className="text-2xl mb-2">{title}</p>
          <span className="text-gray-300">
            {description}
            {TEMP_CONTENT}
          </span>
        </Link>
      </div>
    </div>
  );
};
