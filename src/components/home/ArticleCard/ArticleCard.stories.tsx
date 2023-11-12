import { Meta, StoryObj } from '@storybook/react';
import { ArticleCard } from '.';
import { ArticleCardList } from '../ArticleCardList';

const sotryMeta: Meta = {
  title: 'components/home/ArticleCard',
  component: ArticleCard,
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
};

export default sotryMeta;

type Story = StoryObj<typeof ArticleCardList>;

export const Default: Story = {
  args: {},
};
