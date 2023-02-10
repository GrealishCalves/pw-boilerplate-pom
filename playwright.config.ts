import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  timeout: 120000,
  retries: 0,
  reporter: 'html',
  use: {
    headless: true,
    launchOptions: {
      slowMo: 500,
    },
    channel: 'chrome',
    viewport: {
      width: 1920,
      height: 1080,
    },
    actionTimeout: 60000,
    ignoreHTTPSErrors: true,
    trace: 'on',
    video: 'off',
    screenshot: 'only-on-failure',
  },
};

export default config;
