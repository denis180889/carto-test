import { test as base } from '@playwright/test';
import { HomePage } from './ui/pages/homePage';
import { MapPage } from './ui/pages/mapPage';

export type Pages = {
  homePage: HomePage;
  mapPage: MapPage;
};

export const test = base.extend<Pages>({
  homePage: async ({ page }, use) => {
    const homePage = new HomePage(page);
    await use(homePage);
  },
  mapPage: async ({ page }, use) => {
    const mapPage = new MapPage(page);
    await use(mapPage);
  },
});

export { expect } from '@playwright/test';
