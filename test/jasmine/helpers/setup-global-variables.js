/**
 * DRY Function can be used in specs to reset global variables
 */
function setupGlobalVariables() {
    beforeEach(function () {
        setGlobalVariableFromLibraries();
    });

    afterEach(function () {
        // reset of global variable
        delete window.sassToJs;
    });
}