import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './playwright',
  forbidOnly: !!process.env.CI,
  retries: 2,
  workers: 2,
  timeout: 60 * 1000,
  expect: {
    timeout: 60 * 1000
  },
  reporter: [
    ['list'],
    ['html', { open: 'never' }]
  ],
  use: {
    baseURL: 'http://localhost:4173',
    actionTimeout: 0,
    trace: 'on-first-retry'
  },

  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        viewport: {
          width: 1300,
          height: 1000
        }
      }
    }
  ],

  webServer: {
    command: 'yarn build:preview && yarn serve:preview',
    url: 'http://localhost:4173',
    timeout: 120000,
    reuseExistingServer: !process.env.CI
  }
});
