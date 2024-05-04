import { test } from '../fixture/fixture-config';

test.describe('POM Automation', () => {
  test('E2E - 001', async ({ pm, dataType, dynamicDataOrFix }) => {
    await test.step('enter username & password', async (): Promise<void> => {
      console.log(dataType, dynamicDataOrFix);
      await pm.onLoginPage.visit();
      await pm.onLoginPage.fillUserNameAndPassword();
    });
  });
});
