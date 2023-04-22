import { Locator, Page } from '@playwright/test';

export class MapPage {
    page: Page;

    insightsBtn: Locator;
    thematicIndicesWidgetBtn: Locator;
    facilitiesAndStructuresWidgetSection: Locator;

    map: Locator;

    HDOTAssetsBtn: Locator;
    // hdotSidewalksLayer: Locator;
    // hdotAreasConcernLayer: Locator;
    // hdotBikewaysProposedLayer: Locator;
    // hdotBikewaysExistingLayer: Locator;
    // hdotProjectsRouteLayer: Locator;
    // hdotRouteAadtLayer: Locator;
    // hdotRouteFunsysLayer: Locator;
    // hdotTruckRoutesLayer: Locator;
    // hdotHighwaysPavementTypeLayer: Locator;
    // hdotBridgeRouteLayer: Locator;
    // hdotTunnelsLayer: Locator;
    // hdotAssetsDataLayer: Locator;
    // hdotProjectsKeyLayer: Locator;
    // hdotFacilitiesRepairLayer: Locator;

    hazardsBtn: Locator;

    thematicIndicesBtn: Locator;
    // h3FinalScoreAccessLayer: Locator;
    // h3FinalScoreEcologyLayer: Locator;
    // h3FinalScoreEconomyLayer: Locator;
    // h3FinalScoreEquityLayer: Locator;

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

        this.map = page.locator('#deckgl-overlay');

        this.HDOTAssetsBtn = page.locator("[aria-controls='simple-menu']:has-text('HDOT Assets')");
        // this.hdotSidewalksLayer = page.locator('[value="hdotSidewalksLayer"]');
        // this.hdotAreasConcernLayer = page.locator('[value="hdotAreasConcernLayer"]');
        // this.hdotBikewaysProposedLayer = page.locator('[value="hdotBikewaysProposedLayer"]');
        // this.hdotBikewaysExistingLayer = page.locator('[value="hdotBikewaysExistingLayer"]');
        // this.hdotProjectsRouteLayer = page.locator('[value="hdotProjectsRouteLayer"]');
        // this.hdotRouteAadtLayer = page.locator('[value="hdotRouteAadtLayer"]');
        // this.hdotRouteFunsysLayer = page.locator('[value="hdotRouteFunsysLayer"]');
        // this.hdotTruckRoutesLayer = page.locator('[value="hdotTruckRoutesLayer"]');
        // this.hdotHighwaysPavementTypeLayer = page.locator('[value="hdotHighwaysPavementTypeLayer"]');
        // this.hdotBridgeRouteLayer = page.locator('[value="hdotBridgeRouteLayer"]');
        // this.hdotTunnelsLayer = page.locator('[value="hdotTunnelsLayer"]');
        // this.hdotAssetsDataLayer = page.locator('[value="hdotAssetsDataLayer"]');
        // this.hdotProjectsKeyLayer = page.locator('[value="hdotProjectsKeyLayer"]');
        // this.hdotFacilitiesRepairLayer = page.locator('[value="hdotFacilitiesRepairLayer"]');

        this.hazardsBtn = page.locator("[aria-controls='simple-menu']:has-text('Hazards')")

        this.thematicIndicesBtn = page.locator("[aria-controls='simple-menu']:has-text('Thematic Indices')")
        // this.h3FinalScoreAccessLayer = page.locator('[value="h3FinalScoreAccessLayer"]');
        // this.h3FinalScoreEcologyLayer = page.locator('[value="h3FinalScoreEcologyLayer"]');
        // this.h3FinalScoreEconomyLayer = page.locator('[value="h3FinalScoreEconomyLayer"]');
        // this.h3FinalScoreEquityLayer = page.locator('[value="h3FinalScoreEquityLayer"]');

        this.moreLayersBtn = page.locator("[aria-controls='simple-menu']:has-text('More Layers')")
        this.hdotAssetsPoisLayer = page.locator("[value='hdotAssetsPoisLayer']")

        this.allCheckboxes = page.locator(".MuiSwitch-switchBase");
        this.unselectAllBtn = page.locator("button:has-text('Unselect all')")

        this.introductionTitle = page.locator("h4.MuiTypography-h4:text-is('Introduction')");
        this.introductionParagraph = (text) => page.locator(`.MuiTypography-paragraph:text-is("${text}")`);
        this.mapWidget = page.locator('[aria-label="HDOT Assets by Type"]');
    }


}
