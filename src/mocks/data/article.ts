import { faker } from '@faker-js/faker';

const generateArticle = () => {
  return {
    title: faker.commerce.productName(),
    content: faker.commerce.productDescription(),
  };
};

export const articles = [
  ...Array.from({ length: 20 }, () => generateArticle()),
];
