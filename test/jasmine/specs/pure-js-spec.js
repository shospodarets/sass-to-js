describe("Getting JSON using pure JavaScript", function () {
    setupGlobalVariables();
    setupTestHtmlElements();

    it("shouldn convert generated CSS to JSON", function () {
        var testEl = getHtmlElementToTest();

        expect(
            sassToJs(testEl)
        )
            .toEqual(
            {colorHexShort: "#f00", colorHex: "#ff0000", colorRgba: "rgba(255,0,0,0.5)"}
        );
    });

    it("shouldn convert CSS to JSON from provided CSS property in CSS generated element", function () {
        var testEl = getHtmlElementToTest();

        expect(
            sassToJs(testEl, {pseudoEl: '::before', cssProperty: 'content'})
        )
            .toEqual(
            {pseudoEl: "pseudoEl"}
        );
    });
});