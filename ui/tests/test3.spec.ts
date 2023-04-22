import { test, expect } from '../../fixture';
import { FacilitiesItemTitle } from '../constants/facilitiesItemTitle';

test('Test 3', async function ({ homePage, mapPage }) {

    await test.step('Go to the home page', async () => {
        await homePage.goToHomePage();
    });

    await test.step('Go to map page', async () => {
        await homePage.goToMapPage();
    });

    await test.step('Disable all the "HDOT Assets"', async () => {
        await mapPage.HDOTAssetsBtn.click();
        for (const checkbox of await mapPage.allCheckboxes.all()) {
            await expect(checkbox).toHaveClass(/Mui-checked/);
            await expect(checkbox).not.toHaveClass(/Mui-disabled/);
        }
        await mapPage.unselectAllBtn.click();
        await mapPage.page.keyboard.press("Escape");
    });

    await test.step('Enable Facilities and structure layer', async () => {
        await mapPage.moreLayersBtn.click();
        await mapPage.hdotAssetsPoisLayer.check();
        await mapPage.page.keyboard.press("Escape");
    });

    await test.step('Open the Insights of Thematic indices', async () => {
        await mapPage.insightsBtn.click();
        await mapPage.thematicIndicesWidgetBtn.click();
    });

    await test.step('Check Facilities and Structures widget', async () => {
        await expect(mapPage.facilitiesAndStructuresWidgetSection).toBeVisible();
        await expect(mapPage.map).toHaveScreenshot();

        await expect(mapPage.facilitiesItem(FacilitiesItemTitle.PreSchool)).toContainText("493");
        await expect(mapPage.facilitiesItem(FacilitiesItemTitle.FireStation)).toContainText("101");
        await expect(mapPage.facilitiesItem(FacilitiesItemTitle.PoliceStation)).toContainText("38");
    });

    await test.step('Zoom in Honolulu island', async () => {
        const box = await mapPage.map.boundingBox();
        const mapX = box!.x + box!.width / 2;
        const mapY = box!.y + box!.height / 2;
        await mapPage.page.mouse.move(mapX, mapY);
        await mapPage.page.mouse.down();
        await mapPage.page.mouse.move(mapX + 100, mapY + 270, { steps: 10 });
        await mapPage.page.mouse.up();

        await mapPage.increaseZoomBtn.click({ clickCount: 2 })
    });

    await test.step('Check that the widget values are adapted', async () => {
        await expect(mapPage.facilitiesItem(FacilitiesItemTitle.PreSchool)).toContainText("331");
        await expect(mapPage.facilitiesItem(FacilitiesItemTitle.FireStation)).toContainText("44");
        await expect(mapPage.facilitiesItem(FacilitiesItemTitle.PoliceStation)).toContainText("11");
    });

    await test.step('Filter by Police Station item and check the map', async () => {
        await mapPage.facilitiesItem(FacilitiesItemTitle.PoliceStation).click();
        await expect(mapPage.map).toHaveScreenshot();
    });

    await test.step('Hover one of the police station on the map and check popup', async () => {
        const box = await mapPage.map.boundingBox();
        await mapPage.page.mouse.move(box!.x + 271, box!.y + 421);
        await expect(mapPage.mapPopup("Name: Wahiawa District Station (Police Station)"), "Popup with police station should be visible")
            .toBeVisible()
    });
});
