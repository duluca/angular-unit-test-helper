"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
function injectOne(dependency, _spyObject) {
    _spyObject = testing_1.TestBed.inject(dependency);
}
exports.injectOne = injectOne;
function injectMany(mockedDependencies) {
    mockedDependencies.forEach(([dependency, mockedDependency]) => {
        injectOne(dependency, mockedDependency);
    });
}
exports.injectMany = injectMany;
//# sourceMappingURL=injectHelper.js.map