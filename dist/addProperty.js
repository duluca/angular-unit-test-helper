"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
function addProperty(object, propertyName, valueToReturn) {
    Object.defineProperty(object, propertyName, {
        get: () => valueToReturn,
        enumerable: true,
        configurable: true,
    });
}
exports.addProperty = addProperty;
function addPropertyAsBehaviorSubject(object, propertyName) {
    addProperty(object, propertyName, new rxjs_1.BehaviorSubject(null));
}
exports.addPropertyAsBehaviorSubject = addPropertyAsBehaviorSubject;
function addPropertyAsObservable(object, propertyName) {
    addProperty(object, propertyName, new rxjs_1.Observable());
}
exports.addPropertyAsObservable = addPropertyAsObservable;
//# sourceMappingURL=addProperty.js.map