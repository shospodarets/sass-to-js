describe("Getting JSON using jQuery", function () {
    setupGlobalVariables();
    setupTestHtmlElements();

    it("shouldn convert generated CSS to JSON", function () {
        var testEl = getHtmlElementToTest();

        expect(
            $(testEl).sassToJs()
        )
            .toEqual(
            {colorHexShort: "#f00", colorHex: "#ff0000", colorRgba: "rgba(255,0,0,0.5)"}
        );
    });

    it("shouldn convert generated CSS to JSON in the same way as usual global function call", function () {
        var testEl = getHtmlElementToTest();
        var jqueryJson = $(testEl).sassToJs({pseudoEl: '::before', cssProperty: 'content'});
        var pureJsJson = sassToJs(testEl, {pseudoEl: '::before', cssProperty: 'content'});

        expect(
            jqueryJson
        )
            .toEqual(
            pureJsJson
        );
    });
});