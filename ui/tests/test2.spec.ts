import { test, expect } from '../../fixture';

test('Test 2', async function ({ homePage, mapPage }) {

    await test.step('Remove index property from datasets.json', async () => {
        await homePage.page.route('**/data/datasets.json', async route => {
            const response = await route.fetch();
            const json = await response.json();
            delete json.commons.index;
            await route.fulfill({ response, json });
        });
    });

    await test.step('Go to the home page', async () => {
        await homePage.goToHomePage();
    });

    await test.step('Go to map page', async () => {
        await homePage.goToMapPage();
    });

    await test.step('Check Thematic Indices button is hidden', async () => {
        await expect(mapPage.HDOTAssetsBtn, "HDOT Assets button should be visible").toBeVisible();
        await expect(mapPage.hazardsBtn, "Hazards should be visible").toBeVisible();
        await expect(mapPage.thematicIndicesBtn, "Thematic Indices button should be hidden").toBeHidden();
        await expect(mapPage.moreLayersBtn, "More Layers button should be visible").toBeVisible();
    });

});
