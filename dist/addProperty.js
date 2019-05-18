import { BehaviorSubject, Observable } from 'rxjs';
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
export function addPropertyAsObservable(object, propertyName) {
    addProperty(object, propertyName, new Observable());
}
//# sourceMappingURL=addProperty.js.map