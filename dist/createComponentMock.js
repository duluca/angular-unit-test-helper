import { Component } from '@angular/core';
import camelToKebabCase from 'camel-to-kebab';
import { __decorate } from 'tslib';
export function createComponentMock(className, selectorName) {
    if (!className || !className.endsWith('Component')) {
        throw 'Expected class name to end with Component, but it did not. Provide a valid component class name.';
    }
    if (!selectorName) {
        selectorName = inferSelectorName(className);
    }
    var newClass = (window[className] = function () { });
    return __decorate([Component({ selector: 'app-current-weather', template: '' })], newClass);
}
function inferSelectorName(className) {
    className = className.replace('Component', '');
    className = camelToKebabCase(className);
    return "app-" + className;
}
//# sourceMappingURL=createComponentMock.js.map