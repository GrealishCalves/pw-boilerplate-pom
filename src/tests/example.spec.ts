import { test } from '../fixture/fixture-config';
import { loginPageData } from '../page-objects/login-page/LoginPage-data';

test.describe('POM Automation', () => {
  test('Login', async ({ loginPage }) => {
    await test.step('visit site', async (): Promise<void> => {
      await loginPage.visit(loginPageData.url);
    });

    await test.step('enter username & password', async (): Promise<void> => {
      await loginPage.fillUserNameAndPassword(loginPageData);
    });

    await test.step('send otp', async (): Promise<void> => {
      await loginPage.sendOtp();
    });

    await test.step('check for popup', async (): Promise<void> => {
      await loginPage.checkForPopup();
    });
  });
});
