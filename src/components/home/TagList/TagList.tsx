import { Badge } from '@/components/ui/Badge/Badge';

export interface TagListProps {
  tags: string[];
}

export const TagList = async ({ tags }: TagListProps) => {
  return (
    <div className="w-[700px] py-2">
      <p className="text-xl font-bold mb-3">Popular Tags</p>
      {tags?.map((tag, index) => (
        <Badge key={index} variant="outline" className="mr-1">
          {tag}
        </Badge>
      ))}
    </div>
  );
};
