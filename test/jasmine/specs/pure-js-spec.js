describe("Getting JSON using pure JavaScript", function () {
    setupGlobalVariables();
    setupTestHtmlElements();

    // Testing sassToJs($value);
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

    // Testing sassToJs($propName, $value);
    it("shouldn convert CSS to JSON from provided CSS property in CSS generated element," +
    " Sass string value for which was provided with property name", function () {
        var testEl = getHtmlElementToTest();

        expect(
            sassToJs(testEl, {pseudoEl: '::after', cssProperty: 'content'}).testName
        )
            .toEqual(
            'colorMap'
        );
    });

    it("shouldn convert CSS to JSON from provided CSS property in CSS generated element," +
    " Sass complex value for which was provided with property name", function () {
        var testEl = getHtmlElementToTest();

        expect(
            sassToJs(testEl, {pseudoEl: '::after'}).value
        )
            .toEqual(
            {colorHexShort: "#f00", colorHex: "#ff0000", colorRgba: "rgba(255,0,0,0.5)"}
        );
    });
});