import { test, expect } from '../../fixture';

test('Test 1', async function ({ homePage, mapPage }) {
    const paragraph1 = "The State Highway System provides mobility for over 1.4 million Hawai‘i residents—including a civilian labor force of approximately 680,000 people—over 8 million visitors, and over 32 million tons of freight each year. Although it accounts for only 22% of the total centerline miles of highways and roads, the State Highway System carries approximately 56% of the total 22.42 Million daily vehicle miles (8.2 Billion annually) traveled in Hawai‘i."
    const paragraph2 = "The segments of the State Highway System that experience the highest freight volumes can transport over 20,000 trucks per day. By connecting regions with key locations and carrying high volumes of vehicles and freight, the State Highway System enables the efficient movement of commuters and goods statewide."
    const paragraph3 = "Various climate hazards can impact this system by rendering infrastructure impassable or inoperable. Inundation, for example, might submerge a roadway, a rockfall event might obstruct certain routes or destroy bridges and tunnels, or wildfires could make travel dangerous. By understanding these hazards and forecasting their potential impact, we can take preventative steps and make preparations in order to ensure that our transportation system is as resilient and sustainable as it can be."

    await test.step('Go to the home page', async () => {
        await homePage.goToHomePage();
    });

    await test.step('Go to map page', async () => {
        await homePage.goToMapPage();
    });

    await test.step('Check map is visible', async () => {
        await expect(mapPage.map, "Map should be visible").toBeVisible();
    });

    await test.step('Check Introduction content is visible', async () => {
        await expect(mapPage.introductionTitle, "Introduction title should be visible").toBeVisible();
        await expect(mapPage.introductionParagraph(paragraph1), "Paragraph should be visible").toBeVisible();
        await expect(mapPage.introductionParagraph(paragraph2), "Paragraph should be visible").toBeVisible();
        await expect(mapPage.introductionParagraph(paragraph3), "Paragraph should be visible").toBeVisible();
    });

    await test.step('Check map widget is visible', async () => {
        await expect(mapPage.mapWidget, "Map widget should be visible").toBeVisible();
    });
});
