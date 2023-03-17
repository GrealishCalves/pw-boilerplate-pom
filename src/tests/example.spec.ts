import { test } from '../fixture/fixture-config';

test.describe('POM Automation', () => {
  test.beforeEach(async ({ loginPage }) => {});

  test('E2E - 001', async ({ loginPage }) => {
    await test.step('enter username & password', async (): Promise<void> => {
      await loginPage.visit();
      await loginPage.fillUserNameAndPassword();
    });
  });
});
