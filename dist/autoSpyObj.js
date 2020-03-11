"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const addProperty_1 = require("./addProperty");
const getAll_1 = require("./getAll");
var ObservablePropertyStrategy;
(function (ObservablePropertyStrategy) {
    ObservablePropertyStrategy[ObservablePropertyStrategy["Object"] = 0] = "Object";
    ObservablePropertyStrategy[ObservablePropertyStrategy["Observable"] = 1] = "Observable";
    ObservablePropertyStrategy[ObservablePropertyStrategy["BehaviorSubject"] = 2] = "BehaviorSubject";
})(ObservablePropertyStrategy = exports.ObservablePropertyStrategy || (exports.ObservablePropertyStrategy = {}));
function autoSpyObj({ classUnderTest, spyProperties = [], observableStrategy = ObservablePropertyStrategy.Observable, }) {
    const props = Reflect.ownKeys(classUnderTest.prototype);
    const spyObj = jasmine.createSpyObj(classUnderTest.name, getAll_1.getAllFunctions(classUnderTest.prototype, props));
    const properties = getAll_1.getAllProperties(classUnderTest.prototype, props).concat(spyProperties);
    properties.map(name => {
        let defaultValue = {};
        if (typeof name === 'string' && name.endsWith('$')) {
            defaultValue = getDefaultObservableValue(observableStrategy);
        }
        addProperty_1.addProperty(spyObj, name, defaultValue);
    });
    return spyObj;
}
exports.autoSpyObj = autoSpyObj;
function getDefaultObservableValue(strategy) {
    switch (strategy) {
        case ObservablePropertyStrategy.Object:
            return {};
        case ObservablePropertyStrategy.Observable:
            return new rxjs_1.Observable();
        case ObservablePropertyStrategy.BehaviorSubject:
            return new rxjs_1.BehaviorSubject(null);
    }
}
//# sourceMappingURL=autoSpyObj.js.map