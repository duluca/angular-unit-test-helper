/// <reference types="jasmine" />
export declare enum ObservablePropertyStrategy {
    Object = 0,
    Observable = 1,
    BehaviorSubject = 2
}
export declare function autoSpyObj<TClassUnderTest>(classUnderTest: NewableFunction, spyProperties?: string[], observableStrategy?: ObservablePropertyStrategy): jasmine.SpyObj<TClassUnderTest>;
