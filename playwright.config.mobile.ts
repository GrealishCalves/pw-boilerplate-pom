// playwright.config.ts
import { type PlaywrightTestConfig, devices } from '@playwright/test'; // import devices

const config: PlaywrightTestConfig = {
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
      },
    },
    {
      name: 'MobileSafari',
      use: {
        ...devices['iPhone 12'],
      },
    },
  ],
};
export default config;
