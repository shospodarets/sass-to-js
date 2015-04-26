function setGlobalVariableFromLibraries() {
    // Set global variable if it was taken by 3rd party libraries

    if (window.jQuery && jQuery.fn.sassToJsOriginal) {
        // if jQuery is loaded before, it takes "sassToJs"
        window.sassToJs = jQuery.fn.sassToJsOriginal;
    }

    if (window.angular && angular.element.prototype.sassToJsOriginal) {
        // if AngularJS is loaded before, it takes "sassToJs"
        window.sassToJs = angular.element.prototype.sassToJsOriginal;
    }
}