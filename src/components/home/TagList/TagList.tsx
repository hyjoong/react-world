import { Badge } from '@/components/ui/Badge/Badge';
import { getTags } from '@/api/tags';

export const TagList = async () => {
  // TODO: error handling
  const { tags } = await getTags();

  return (
    <div className="w-[400px] py-2">
      <p className="text-xl font-bold mb-3">Popular Tags</p>
      {tags?.map((tag, index) => (
        <Badge key={index} variant="outline" className="mr-1">
          {tag}
        </Badge>
      ))}
    </div>
  );
};
