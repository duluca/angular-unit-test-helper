"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
function addProperty(object, propertyName, valueToReturn) {
    Object.defineProperty(object, propertyName, {
        get: function () { return valueToReturn; },
        enumerable: true,
        configurable: true,
    });
}
exports.addProperty = addProperty;
function addPropertyAsBehaviorSubject(object, propertyName) {
    addProperty(object, propertyName, new rxjs_1.BehaviorSubject(null));
}
exports.addPropertyAsBehaviorSubject = addPropertyAsBehaviorSubject;
//# sourceMappingURL=addProperty.js.map