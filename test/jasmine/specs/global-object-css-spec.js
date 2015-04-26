describe("Test getting JSON from <body/> CSS", function () {
    setupGlobalVariables();

    it("shouldn be not empty JSON object in <body> CSS", function () {
        expect(
            Object.keys(
                sassToJs(document.body)
            ).length
        )
            .not.toBe(
            0
        );
    });

    it("shouldn get expected complex JSON object from global element", function () {
        // this test expects that browser keeps the order
        // of the properties in Object (it's not guaranteed according the JS spec)
        var expected = {
            'stringsMap': {"stringWithQuotes": "string", "stringWithDoubleQuotes": "string", "stringWithoutQuotes": "string", "stringTrue": "true", "stringFalse": "false", "pixels": "480px", "percents": "4%"},
            'colorMap': {"colorHexShort": "#f00", "colorHex": "#ff0000", "colorRgba": "rgba(255,0,0,0.5)"},
            'numberMap': {"int": 10, "positiveNum": 4.7, "negativeNum": -43.67},
            'othersMap': {"boolean": true, "nulls": null},
            'mapOfMaps': {"map": {"prop1": 1, "prop2": 2, "prop3": 3}, "map-nested": {"prop1": {"prop2": [1, 2, {"prop3": "test"}]}}, "map-full": {"prop1": [1, 2, {"prop12": 1}], "prop2": ["#ff0", false, {"prop21": 1, "prop22": "string2"}], "prop3": [2, 3, 4, "string3"]}},
            'listMap': {"numbers": [1, 2, 3], "strings": ["string1", "string2"], "booleans": [true, false], "cssValuesList": ["1.5em", "1em", 0, "2em"], "listCommaSeparated": ["item-1", "item-2", "item-3"], "withPodLists": [["1px", "2px"], ["5px", "6px"]], "nestedList": ["a", "b", ["c", "d", "e", ["f", "g"], "h"], "i"]}
        };

        expect(
            JSON.stringify(
                sassToJs(document.body)
            )
        )
            .toBe(
            JSON.stringify(
                expected
            )
        );
    });
});