import { Locator, Page } from '@playwright/test';

export class MapPage {
    page: Page;

    map: Locator;

    HDOTAssetsBtn: Locator;
    hazardsBtn: Locator;
    thematicIndicesBtn: Locator;
    moreLayersBtn: Locator;

    introductionTitle: Locator;
    introductionParagraph: (text: string) => Locator;
    mapWidget: Locator;



    constructor(page: Page) {
        this.page = page;

        this.map = page.locator('#deckgl-wrapper');

        this.HDOTAssetsBtn = page.locator("[aria-controls='simple-menu']:has-text('HDOT Assets')")
        this.hazardsBtn = page.locator("[aria-controls='simple-menu']:has-text('Hazards')")
        this.thematicIndicesBtn = page.locator("[aria-controls='simple-menu']:has-text('Thematic Indices')")
        this.moreLayersBtn = page.locator("[aria-controls='simple-menu']:has-text('More Layers')")

        this.introductionTitle = page.locator("h4.MuiTypography-h4:text-is('Introduction')");
        this.introductionParagraph = (text) => page.locator(`.MuiTypography-paragraph:text-is("${text}")`);
        this.mapWidget = page.locator('[aria-label="HDOT Assets by Type"]');
    }


}
