export declare enum ObservablePropertyStrategy {
    Object = 0,
    Observable = 1,
    BehaviorSubject = 2
}
export declare function autoSpyObj({ classUnderTest, spyProperties, observableStrategy, }: {
    classUnderTest: NewableFunction;
    spyProperties?: string[];
    observableStrategy?: ObservablePropertyStrategy;
}): any;
