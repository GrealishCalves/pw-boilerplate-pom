import { test as fixture } from '@playwright/test';
import { OptionsType } from '../common/interface/common-types';
import { PageManager, PagesType } from '../page-objects/pageManger';
import { DataTestType, dataTestFixtures } from './fixture-data';
import { pageManagerFixtures } from './fixture-page';

export type FixturesType = PagesType & DataTestType;

const test = fixture.extend<FixturesType>({
  ...pageManagerFixtures,
  ...dataTestFixtures,
});

export { test, OptionsType };
export const expect = test.expect;
