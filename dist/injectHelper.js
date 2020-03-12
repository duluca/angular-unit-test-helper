import { TestBed } from '@angular/core/testing';
export function injectOne(dependency, testBed) {
    if (testBed === void 0) { testBed = TestBed; }
    return testBed.inject(dependency);
}
export function injectSpy(dependency, testBed) {
    if (testBed === void 0) { testBed = TestBed; }
    return injectOne(dependency, testBed);
}
//# sourceMappingURL=injectHelper.js.map