import { test as fixture } from '@playwright/test';
import { OptionsType } from '../common/interface/common-types';
import { LoginPageFrameLocators, LoginPageLocators } from '../page-objects/login-page/LoginPage-constants';
import { LoginPage } from '../page-objects/login-page/LoginPage-page';
import { ApiService } from '../common/services/api.service';
import { PagesType, ServiceType } from '../fixture/fixture-type';

const test = fixture.extend<PagesType & ServiceType>({
  ApiService: async ({ page }, use) => {
    await use(new ApiService(page));
  },

  loginPage: async ({ page }, use) => {
    const options: OptionsType = {
      page,
      pageLocatorsObject: LoginPageLocators,
      frameSelector: '#calconnectIframe',
      frameLocatorsObject: LoginPageFrameLocators,
    };
    await use(new LoginPage(options));
  },
});

export { test, OptionsType };
export const expect = test.expect;
