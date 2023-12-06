import { Badge } from '@/components/ui/Badge/Badge';
import Link from 'next/link';

export interface TagListProps {
  tags: string[];
}

export const TagList = async ({ tags }: TagListProps) => {
  return (
    <div className="min-w-[250px] py-2">
      <p className="text-xl font-bold mb-3">Popular Tags</p>
      {tags?.map((tag, index) => (
        <Link href={`/tag/${tag}`}>
          <Badge key={index} variant="outline" className="mr-1">
            {tag}
          </Badge>
        </Link>
      ))}
    </div>
  );
};
