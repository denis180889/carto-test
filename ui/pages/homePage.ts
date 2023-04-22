import { Locator, Page } from '@playwright/test';

export class HomePage {
    page: Page;

    climateResilienceBtn: Locator;
    exploreMapBtn: Locator;

    constructor(page: Page) {
        this.page = page;

        this.climateResilienceBtn = page.locator('.MuiTab-wrapper:text-is("Climate resilience")');
        this.exploreMapBtn = page.locator('.MuiButton-label:text-is("Explore map")').first();
    }

    async goToHomePage(): Promise<void> {
        await this.page.goto(process.env.LOGIN_PAGE!, { waitUntil: "networkidle" });
    }

    async goToMapPage(): Promise<void> {
        await this.exploreMapBtn.click();
        await this.page.waitForURL('**/map/information/info', { waitUntil: "networkidle" });
    }
}
