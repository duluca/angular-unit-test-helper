"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
function injectOne(dependency, testBed = testing_1.TestBed) {
    return testBed.inject(dependency);
}
exports.injectOne = injectOne;
function injectSpy(dependency, testBed = testing_1.TestBed) {
    return injectOne(dependency, testBed);
}
exports.injectSpy = injectSpy;
//# sourceMappingURL=injectHelper.js.map