# Angular Unit Test Helper

> Helper functions to help write unit tests in Angular using mocks and spies

![Angular Version](https://img.shields.io/badge/angular-v13-326839)
[![CircleCI](https://circleci.com/gh/duluca/angular-unit-test-helper.svg?style=svg)](https://circleci.com/gh/duluca/angular-unit-test-helper)
[![Coverage Status](https://coveralls.io/repos/github/duluca/angular-unit-test-helper/badge.svg?branch=main)](https://coveralls.io/github/duluca/angular-unit-test-helper?branch=main)

[![npm](https://img.shields.io/npm/v/angular-unit-test-helper)](https://www.npmjs.com/package/angular-unit-test-helper)
[![npm](https://img.shields.io/npm/dt/angular-unit-test-helper)](https://www.npmjs.com/package/angular-unit-test-helper)

## Goal

Minimal feature set to bridge obvious gaps in jasmine's support of modern JavaScript features. Ideally, I'd like to be using an auto-mocking library, but they don't play well with Angular's `TestBed` and `RxJS\BehaviorSubject`.

Here's a great article about auto-mocking libraries: https://hackernoon.com/with-typescript-3-and-substitute-js-you-are-already-missing-out-when-mocking-or-faking-a3b3240c4607.

## Install

Add the package to your Angular project with npm:

```bash
npm i -D angular-unit-test-helper
```

## Example Projects

Check out my sample projects that leverage `angular-unit-test-helper`:

- https://github.com/duluca/local-weather-app
- https://github.com/duluca/lemon-mart

Use the [`ng-tester`](https://www.npmjs.com/package/ng-tester) package to generate robust and efficient unit tests using `angular-unit-test-helper`.

Usage

```bash
npm i -D ng-tester
npx ng g ng-tester:unit
```

For more information see https://github.com/bjsawyer/ng-tester/.

## Features

### `autoSpyObj(classUnderTest: Function, spyProperties: string[] = [], observableStrategy = ObservablePropertyStrategy.Observable)`

An extension of `jasmine.createSpyObj` with automatic discovery of functions and property getters given a Class, without requiring an instance of an object.

If you'd want to spy on a property without a getter, then you can simply pass in the property name like `autoSpyObj(WeatherService, ['currentWeather$'])`.

Return value of `autoSpyObj` will be a true mock of the Class with spy-able methods and properties, making it easy to control and modify the return values of external dependencies during testing.

If property name ends with `$` indicating that the property is an Observable, then you can specify an optional `ObservablePropertyStrategy` to prefer `{}`, `new Observable()` or `new BehaviorSubject(null)` default values for your mocked properties.

Usage

```ts
const weatherServiceSpy = autoSpyObj(WeatherService)
```

Alternate Usage

```ts
const weatherServiceSpy = autoSpyObj(
  WeatherService,
  ['currentWeather$'],
  ObservablePropertyStrategy.BehaviorSubject
)
```

`autoSpyObj` replaces the more verbose and difficult to maintain code, shown below:

```ts
jasmine.createSpyObj(WeatherService.name, [
  'getCurrentWeather',
  'getCurrentWeatherByCoords',
  'updateCurrentWeather',
])
addPropertyAsBehaviorSubject(weatherServiceSpy, 'currentWeather$')
```

### `addProperty(object: object, propertyName: string, valueToReturn: object)`

When creating a mock object, add a property to that object with a property getter, so you can use a jasmine.spyOnProperty.

Usage

```ts
  weatherServiceMock = jasmine.createSpyObj('WeatherService', ['getCurrentWeather'])
  addPropertyAsBehaviorSubject(weatherServiceMock, 'currentWeather', null)
  ...
  spyOnProperty(weatherServiceMock, 'currentWeather$').and.returnValue({ temp = 72})
```

### `addPropertyAsBehaviorSubject(object: object, propertyName: string)`

Convenience method to configure a property as a BehaviorSubject, so you can update its value before each test by calling .next on it.

Usage

```ts
  weatherServiceMock = jasmine.createSpyObj('WeatherService', ['getCurrentWeather'])
  addPropertyAsBehaviorSubject(weatherServiceMock, 'currentWeather$')
  ...
  weatherServiceMock.currentWeather$.next(fakeWeather)
```

### _deprecated_ `createComponentMock(className: string, selectorName?: string, template = '')`

_Deprecated_ Use `ng-mocks` instead. https://ng-mocks.sudo.eu/api/MockComponent.

1. Install using `install i -D ng-mocks`
2. Refactor `createComponentMock` function calls to look like the sample below:

```TypeScript
TestBed.configureTestingModule({
  declarations: [
    // for a single component
    MockComponent(Component),

    // for a set of components
    ...MockComponents(Component1, Component2),
  ],
})
```

Creates a mock class decorated with @Component, if not specified selector is inferred to be MyClassComponent -> app. Provides an option to override empty template.

Usage

```ts
TestBed.configureTestingModule({
      declarations: [ ..., createComponentMock('CurrentWeatherComponent')]
      ...
})
```

Note: Inferred selector in the above example is 'app-current-weather'.

Replaces boilerplate

```ts
@Component({
  selector: 'app-current-weather',
  template: '',
})
class MockCurrentWeatherComponent {}
```

### `injectClass<TDependency>(dependency: Type<TDependency> | AbstractType<TDependency>): TDependency`

Helper function to inject a dependency, like a service, into the TestBed with a typed return variable.

Usage

```ts
beforeEach(() => {
  weatherService = injectClass(WeatherService)
})
```

Replaces

```ts
beforeEach(() => {
  weatherService = TestBed.inject(WeatherService)
})
```

### `injectSpy<TDependency>(dependency: Type<TDependency> | AbstractType<TDependency>): jasmine.SpyObj<TDependency>`

Similar to `injectClass`, but more descriptive to read for developers if returning a mocked SpyObj.

Usage

```ts
beforeEach(() => {
  weatherServiceMock = injectSpy(WeatherService)
})
```

Replaces

```ts
beforeEach(() => {
  weatherServiceMock = TestBed.inject(WeatherService) as any
})
```

### `getAllFunctions(prototype: any, props?: (string | number | symbol)[])`

Helper function that return all functions in a given Class using reflection, so you don't have to provide an instance of the object.

### `getAllProperties(prototype: any, props?: (string | number | symbol)[])`

Helper function that return all property getters in a given Class using reflection, so you don't have to provide an instance of the object.

## Contributing

- Send PR, will accept
- To setup the project, run `npm install`
- Test against the example project listed below using `npm pack` to create a `.tgz` file and install the `.tgz` file using `npm install -D ../path/to/your.tgz`
  - Using `npm link` doesn't work as expected due `devDependencies` being symlinked to the parent Angular project, causing issues with the framework.
- To publish the project, run `npm version major|minor|patch`
  > Read more about that setup by Isaac Schlueter [here](https://blog.npmjs.org/post/184553141742/easy-automatic-npm-publishes)
