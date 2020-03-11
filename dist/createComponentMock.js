"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const camel_to_kebab_1 = __importDefault(require("camel-to-kebab"));
const tslib_1 = require("tslib");
function createComponentMock(className, selectorName, template = '') {
    if (!className || !className.endsWith('Component')) {
        throw new Error('Expected class name to end with Component, but it did not. Provide a valid component class name.');
    }
    if (!selectorName) {
        selectorName = inferSelectorName(className);
    }
    const newClass = (getWindow()[className] = () => { });
    return tslib_1.__decorate([core_1.Component({ selector: selectorName, template })], newClass);
}
exports.createComponentMock = createComponentMock;
function getWindow() {
    if (typeof window === 'undefined') {
        return {};
    }
    return window;
}
function inferSelectorName(className) {
    className = className.replace('Component', '');
    className = camel_to_kebab_1.default(className);
    return `app-${className}`;
}
//# sourceMappingURL=createComponentMock.js.map