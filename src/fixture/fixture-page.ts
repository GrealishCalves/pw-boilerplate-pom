import { PageManager } from '../page-objects/pageManger';

export const pageManagerFixtures = {
  pm: async ({ page }, use) => {
    await use(new PageManager(page));
  },
};
