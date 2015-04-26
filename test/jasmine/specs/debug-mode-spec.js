describe("Debug mode test", function () {
    setupGlobalVariables();

    beforeEach(function () {
        spyOn(console, 'error');
    });

    it("should throw an error when element is not provided and return an empty object", function () {
        var json = sassToJs(undefined, {debug: true});
        expect(console.error).toHaveBeenCalledWith([undefined, " is not an HTML element"]);
        expect(console.error.calls.count()).toBe(1);
        expect(json).toEqual({});
    });

    it("should throw an error when jQuery element is not provided and return an empty object", function () {
        var json = $('').sassToJs({debug: true});
        expect(console.error).toHaveBeenCalledWith([undefined, " is not an HTML element"]);
        expect(console.error.calls.count()).toBe(1);
        expect(json).toEqual({});
    });

    it("should throw an error when AngularJS element is not provided and return an empty object", function () {
        var json = angular.element('').sassToJs({debug: true});
        expect(console.error).toHaveBeenCalledWith([undefined, " is not an HTML element"]);
        expect(console.error.calls.count()).toBe(1);
        expect(json).toEqual({});
    });

    it("should throw an error when there isn't CSS value for property and return an empty object", function () {
        var params = {'cssProperty': 'stringMap', debug: true};
        var json = sassToJs(document.body, params);
        expect(console.error).toHaveBeenCalledWith(['CSS value for ', document.body, ' with params ', params, ' is empty']);
        expect(json).toEqual({});
    });

    it("should throw an error when CSS value cannot be parsed as JSON and return an empty object", function () {
        var params = {'cssProperty': 'margin', debug: true};
        var json = sassToJs(document.body, params);
        expect(console.error).toHaveBeenCalledWith(['Cannot parse JSON from ', document.body, ' with params ', params]);
        expect(json).toEqual({});
    });
});