import { Locator, Page } from '@playwright/test';

export class HomePage {
    page: Page;

    logo: Locator;

    climateResilienceBtn: Locator;
    actionPlanBtn: Locator;
    climateStressorBtn: Locator;
    theUrgencyBtn: Locator;
    HDOTMapBtn: Locator;
    mapComponentsBtn: Locator;

    climateResilienceTitle: Locator;
    actionPlanTitle: Locator;
    climateStressorTitle: Locator;
    theUrgencyTitle: Locator;
    mapComponentsTitle: Locator;
    HDOTAssetAndHazardMapTitle: Locator;

    mapScreenshot: Locator;
    exploreMapBtn: Locator;

    scrollBackToTopBtn: Locator;

    constructor(page: Page) {
        this.page = page;

        this.logo = this.page.locator(`.MuiGrid-item > a:has-text("Hawai'i Highways")`);

        this.climateResilienceBtn = page.locator('.MuiTab-wrapper:text-is("Climate resilience")');
        this.actionPlanBtn = page.locator('.MuiTab-wrapper:text-is("Action Plan")');
        this.climateStressorBtn = page.locator('.MuiTab-wrapper:text-is("Climate stressor")');
        this.theUrgencyBtn = page.locator('.MuiTab-wrapper:text-is("The Urgency")');
        this.HDOTMapBtn = page.locator('.MuiTab-wrapper:text-is("HDOT Map")');
        this.mapComponentsBtn = page.locator('.MuiTab-wrapper:text-is("Map components")');

        this.climateResilienceTitle = page.locator("h3:text-is('Climate resilience')");
        this.actionPlanTitle = page.locator("h3:text-is('The HDOT Action Plan')");
        this.climateStressorTitle = page.locator("h3:text-is('Climate stressor')");
        this.theUrgencyTitle = page.locator("h3:text-is('The Urgency')");
        this.mapComponentsTitle = page.locator("h3:text-is('Map components')");
        this.HDOTAssetAndHazardMapTitle = page.locator("h3:text-is('HDOT Asset and Hazard Map')");

        this.mapScreenshot = page.locator('img[alt="map screenshot"]');
        this.exploreMapBtn = page.locator('.MuiButton-label:text-is("Explore map")').first();

        this.scrollBackToTopBtn = page.locator('[aria-label="scroll back to top"]');
    }

    async goToHomePage(): Promise<void> {
        await this.page.goto(process.env.LOGIN_PAGE!, { waitUntil: "networkidle" });
    }

    async goToMapPage(): Promise<void> {
        await this.exploreMapBtn.click();
        await this.page.waitForURL('**/map/information/info', { waitUntil: "networkidle" });
    }
}
