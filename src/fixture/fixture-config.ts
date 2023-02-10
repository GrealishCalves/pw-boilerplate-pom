import { test as fixture } from '@playwright/test';
import { pagesType } from './fixture-type';
import { OptionsType } from '../common/interface/common-types';
import { LoginPageFrameLocators, LoginPageLocators } from '../page-objects/login-page/LoginPage-constants';
import { LoginPage } from '../page-objects/login-page/LoginPage-page';

const test = fixture.extend<pagesType>({
  loginPage: async ({ page }, use) => {
    const options: OptionsType = {
      page,
      pageLocatorsObject: LoginPageLocators,
      frameSelector: '#ccBusiness',
      frameLocatorsObject: LoginPageFrameLocators,
    };
    await use(new LoginPage(options));
  },
});

export { test, OptionsType };
export const expect = test.expect;
