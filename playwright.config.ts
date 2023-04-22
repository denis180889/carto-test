import { type PlaywrightTestConfig } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

const config: PlaywrightTestConfig = {
  name: 'automation-tests',
  use: {
    actionTimeout: 30_000,
    navigationTimeout: 40_000,
    ignoreHTTPSErrors: true,
    acceptDownloads: true,
    headless: true,
    viewport: { width: 1280, height: 720 },
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'retain-on-failure',
  },
  expect: {
    timeout: 30_000,
  },
  projects: [
    {
      name: 'chrome',
      use: {
        channel: 'chrome',
        browserName: 'chromium',
      },
    },
    {
      name: 'webkit',
      use: {
        browserName: 'webkit',
      },
    },
    {
      name: 'firefox',
      use: {
        browserName: 'firefox',
      },
    },
  ],
  snapshotDir: 'ui/resources/screenshots',
  testDir: 'ui/tests/',
  reporter: [['list'], ['html']],
  reportSlowTests: null,
  timeout: 200_000,
};

export default config;
