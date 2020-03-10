import { TestBed } from '@angular/core/testing';
export function injectOne(dependency, _spyObject) {
    _spyObject = TestBed.inject(dependency);
}
export function injectMany(mockedDependencies) {
    mockedDependencies.forEach(function (_a) {
        var dependency = _a[0], mockedDependency = _a[1];
        injectOne(dependency, mockedDependency);
    });
}
var Foo = /** @class */ (function () {
    function Foo() {
    }
    return Foo;
}());
var fooMock;
fooMock = jasmine.createSpyObj('blah', []);
var Bar = /** @class */ (function () {
    function Bar() {
    }
    return Bar;
}());
var barMock;
barMock = jasmine.createSpyObj('blah', []);
injectMany([[Foo, fooMock], [Bar, barMock]]);
//# sourceMappingURL=injectHelper.js.map