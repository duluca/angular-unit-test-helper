import { BehaviorSubject } from 'rxjs';
export function addProperty(object, propertyName, valueToReturn) {
    Object.defineProperty(object, propertyName, {
        get: function () { return valueToReturn; },
        enumerable: true,
        configurable: true,
    });
}
export function addPropertyAsBehaviorSubject(object, propertyName) {
    addProperty(object, propertyName, new BehaviorSubject(null));
}
//# sourceMappingURL=addProperty.js.map