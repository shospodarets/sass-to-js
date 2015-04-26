// In the <body> CSS are set all tested JSON values
// For each value there is CSS styles block for an element
// With the same class
// We take second element of them to test

// it is expected that browser keeps the order
// of the properties in Object (it's not guaranteed according the JS spec)
function getHtmlElementToTest() {
    var testValues = $(document.body).sassToJs();

    var testElementQuery = '.' + Object.keys(
            testValues
        )[1];

    return document.querySelector(testElementQuery);
}
