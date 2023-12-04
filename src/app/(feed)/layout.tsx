import { getAllTags } from '@/api/tag';
import { TagList } from '@/components/home/TagList';

type LayoutProps = {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
  children: React.ReactNode;
};

export default async function RootLayout({ children }: LayoutProps) {
  const { tags } = await getAllTags();
  return (
    <div className="flex">
      {children}
      <TagList tags={tags} />
    </div>
  );
}
