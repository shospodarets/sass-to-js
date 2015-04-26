/**
 * DRY Creates HTML elements to test their CSS values
 */
function setupTestHtmlElements() {
    // get Sass map to test as JSON
    var testValues = $(document.body).sassToJs();

    beforeEach(function () {
        // create elements
        // for each element tested Sass values are set in CSS
        Object.keys(testValues).forEach(function (testValue) {
            var testEl = document.createElement('div');
            testEl.className = testValue;
            document.body.appendChild(testEl);
        });
    });

    afterEach(function () {
        // remove elements
        Object.keys(testValues).forEach(function (testValue) {
            var testEl = document.querySelector('.' + testValue);
            document.body.removeChild(testEl);
        });
    });
}