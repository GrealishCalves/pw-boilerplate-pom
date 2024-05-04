import { test as fixture } from '@playwright/test';
import { OptionsType } from '../common/interface/common-types';
import { PageManager, PagesType } from '../page-objects/pageManger';
import { DataTestType, dataTestFixtures } from './fixture-data';

export type FixturesType = PagesType & DataTestType;

const test = fixture.extend<FixturesType>({
  pm: async ({ page }, use) => {
    await use(new PageManager(page));
  },
  ...dataTestFixtures,
});

export { test, OptionsType };
export const expect = test.expect;
