import { type PlaywrightTestConfig } from '@playwright/test';

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
  retries: 1,
  maxFailures: 10,
  testDir: 'ui/tests/',
  reporter: process.env.CI ? [['list'], ['github'], ['html', { open: 'never' }]] : [['list'], ['html']],
  reportSlowTests: null,
  timeout: 300_000,
};

export default config;
