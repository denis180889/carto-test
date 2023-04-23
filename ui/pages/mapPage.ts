import { Locator, Page } from '@playwright/test';
import { FacilitiesItemTitle } from '../constants/facilitiesItemTitle';

export class MapPage {
    page: Page;

    insightsBtn: Locator;
    thematicIndicesWidgetBtn: Locator;
    facilitiesAndStructuresWidgetSection: Locator;
    facilitiesItem: (name: FacilitiesItemTitle) => Locator;

    map: Locator;
    mapPopup: (text: string) => Locator
    zoomLevel: Locator;
    decreaseZoomBtn: Locator;
    increaseZoomBtn: Locator;

    HDOTAssetsBtn: Locator;
    hazardsBtn: Locator;
    thematicIndicesBtn: Locator;
    moreLayersBtn: Locator;
    hdotAssetsPoisLayer: Locator;

    allCheckboxes: Locator;
    unselectAllBtn: Locator;

    introductionTitle: Locator;
    introductionParagraph: (text: string) => Locator;
    mapWidget: Locator;

    constructor(page: Page) {
        this.page = page;

        this.insightsBtn = page.locator(".MuiTab-root:has-text('Insights')");
        this.thematicIndicesWidgetBtn = page.locator("h5:text-is('Thematic Indices')");
        this.facilitiesAndStructuresWidgetSection = page.locator("section[aria-label='Facilities and Structures']")
        this.facilitiesItem = (name) => this.facilitiesAndStructuresWidgetSection.locator(`.MuiGrid-wrap-xs-nowrap:has-text("${name}")`)

        this.map = page.locator('#deckgl-wrapper');
        this.mapPopup = text => this.map.locator(`div.content span:text-is('${text}')`)
        this.zoomLevel = page.locator("span.MuiTypography-displayBlock");
        this.decreaseZoomBtn = page.locator("[aria-label='Decrease zoom']");
        this.increaseZoomBtn = page.locator("[aria-label='Increase zoom']");

        this.HDOTAssetsBtn = page.locator("[aria-controls='simple-menu']:has-text('HDOT Assets')");
        this.hazardsBtn = page.locator("[aria-controls='simple-menu']:has-text('Hazards')")
        this.thematicIndicesBtn = page.locator("[aria-controls='simple-menu']:has-text('Thematic Indices')")
        this.moreLayersBtn = page.locator("[aria-controls='simple-menu']:has-text('More Layers')")
        this.hdotAssetsPoisLayer = page.locator("[value='hdotAssetsPoisLayer']")

        this.allCheckboxes = page.locator(".MuiSwitch-switchBase");
        this.unselectAllBtn = page.locator("button:has-text('Unselect all')")

        this.introductionTitle = page.locator("h4.MuiTypography-h4:text-is('Introduction')");
        this.introductionParagraph = (text) => page.locator(`.MuiTypography-paragraph:text-is("${text}")`);
        this.mapWidget = page.locator('[aria-label="HDOT Assets by Type"]');
    }


}
