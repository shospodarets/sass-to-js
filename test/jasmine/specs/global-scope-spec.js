describe("Global JS scope test", function() {
    it("shouldn't be a global function when jQuery or Angular is loaded", function() {
        expect(typeof window.sassToJs).toBe("undefined");
    });

    it("shouldn't be a global jQuery function", function() {
        expect(typeof $.fn.sassToJsOriginal).toBe("function");
    });

    it("shouldn't be a global AngularJS function", function() {
        expect(typeof angular.element.prototype.sassToJs).toBe("function");
    });
});