import { test } from '../fixture/fixture-config';
import { loginPageData } from '../page-objects/login-page/LoginPage-data';

test.describe('POM Automation', () => {
  test.beforeEach(async ({ loginPage }) => {});

  test('E2E - 001', async ({ loginPage }) => {
    await test.step('enter username & password', async (): Promise<void> => {
      await loginPage.visit(loginPageData.url);
      await loginPage.fillUserNameAndPassword(loginPageData);
    });
  });
});
