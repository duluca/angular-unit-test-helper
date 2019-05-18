import { BehaviorSubject, Observable } from 'rxjs';
import { addProperty } from './addProperty';
import { getAllFunctions, getAllProperties } from './getAll';
export var ObservablePropertyStrategy;
(function (ObservablePropertyStrategy) {
    ObservablePropertyStrategy[ObservablePropertyStrategy["Object"] = 0] = "Object";
    ObservablePropertyStrategy[ObservablePropertyStrategy["Observable"] = 1] = "Observable";
    ObservablePropertyStrategy[ObservablePropertyStrategy["BehaviorSubject"] = 2] = "BehaviorSubject";
})(ObservablePropertyStrategy || (ObservablePropertyStrategy = {}));
export function autoSpyObj(classUnderTest, observableStrategy) {
    if (observableStrategy === void 0) { observableStrategy = ObservablePropertyStrategy.Observable; }
    var props = Reflect.ownKeys(classUnderTest.prototype);
    var spyObj = jasmine.createSpyObj(classUnderTest.name, getAllFunctions(classUnderTest.prototype, props));
    var properties = getAllProperties(classUnderTest.prototype, props);
    properties.map(function (name) {
        var defaultValue = {};
        if (typeof name === 'string' && name.endsWith('$')) {
            defaultValue = getDefaultObservableValue(observableStrategy);
        }
        addProperty(spyObj, name, defaultValue);
    });
    return spyObj;
}
function getDefaultObservableValue(strategy) {
    switch (strategy) {
        case ObservablePropertyStrategy.Object:
            return {};
        case ObservablePropertyStrategy.Observable:
            return new Observable();
        case ObservablePropertyStrategy.BehaviorSubject:
            return new BehaviorSubject(null);
    }
}
//# sourceMappingURL=autoSpyObj.js.map