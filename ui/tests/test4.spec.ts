import { test, expect } from '../../fixture';

test('Test 4', async function ({ homePage, mapPage }) {

    await test.step('Go to the home page', async () => {
        await homePage.goToHomePage();
    });

    await test.step('Go to each entry and check section name', async () => {
        await homePage.climateResilienceBtn.click();
        await expect(homePage.climateResilienceTitle).toBeInViewport();
        await homePage.scrollBackToTopBtn.click();
        await expect(homePage.exploreMapBtn).toBeInViewport();

        await homePage.actionPlanBtn.click();
        await expect(homePage.actionPlanTitle).toBeInViewport();
        await homePage.scrollBackToTopBtn.click();
        await expect(homePage.exploreMapBtn).toBeInViewport();

        await homePage.climateStressorBtn.click();
        await expect(homePage.climateStressorTitle).toBeInViewport();
        await homePage.scrollBackToTopBtn.click();
        await expect(homePage.exploreMapBtn).toBeInViewport();

        await homePage.theUrgencyBtn.click();
        await expect(homePage.theUrgencyTitle).toBeInViewport();
        await homePage.scrollBackToTopBtn.click();
        await expect(homePage.exploreMapBtn).toBeInViewport();

        await homePage.HDOTMapBtn.click();
        await expect(homePage.mapScreenshot).toBeInViewport();
        await homePage.scrollBackToTopBtn.click();
        await expect(homePage.exploreMapBtn).toBeInViewport();

        await homePage.mapComponentsBtn.click();
        await expect(homePage.mapComponentsTitle).toBeInViewport();
        await homePage.scrollBackToTopBtn.click();
        await expect(homePage.exploreMapBtn).toBeInViewport();
    });

    await test.step('Go to second section and then to explore map', async () => {
        await homePage.actionPlanTitle.scrollIntoViewIfNeeded();
        await homePage.HDOTAssetAndHazardMapTitle.scrollIntoViewIfNeeded();
    });

    await test.step('Click on logo', async () => {
        await homePage.logo.click();
        await expect(homePage.exploreMapBtn).toBeInViewport();
    });
});
