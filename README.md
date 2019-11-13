# Angular Unit Test Helper

> Helper functions to help write unit tests in Angular using mocks and spies

[![CircleCI](https://circleci.com/gh/duluca/angular-unit-test-helper.svg?style=svg)](https://circleci.com/gh/duluca/angular-unit-test-helper)

## Goal

Minimal feature set to bridge obvious gaps in jasmine's support of modern JavaScript features. Ideally, I'd like to be using an auto-mocking library, but they don't play well with Angular's `TestBed` and `RxJS\BehaviorSubject`.

Here's a great article about auto-mocking libraries: https://hackernoon.com/with-typescript-3-and-substitute-js-you-are-already-missing-out-when-mocking-or-faking-a3b3240c4607.

## Install

Add the package to your Angular project with npm:

```
npm i -D angular-unit-test-helper
```

## Example Projects

Check out my sample projects:

- https://github.com/duluca/local-weather-app
- https://github.com/duluca/lemon-mart

## Features

### function autoSpyObj(classUnderTest: Function, spyProperties: string[] = [], observableStrategy = ObservablePropertyStrategy.Observable)

An extension of `jasmine.createSpyObj` with automatic discovery of functions and property getters given a Class, without requiring an instance of an object.

If you'd want to spy on a property without a getter, then you can simply pass in the property name like `autoSpyObj(WeatherService, ['currentWeather$'])`.

Return value of `autoSpyObj` will be a true mock of the Class with spy-able methods and properties, making it easy to control and modify the return values of external dependencies during testing.

If property name ends with `$` indicating that the property is an Observable, then you can specify an optional `ObservablePropertyStrategy` to prefer `{}`, `new Observable()` or `new BehaviorSubject(null)` default values for your mocked properties.

Usage

```
    const weatherServiceSpy = autoSpyObj(WeatherService)
```

Alternate Usage

```
     const weatherServiceSpy = autoSpyObj(
      WeatherService,
      ['currentWeather$'],
      ObservablePropertyStrategy.BehaviorSubject
    )
```

`autoSpyObj` replaces the more verbose and difficult to maintain code, shown below:

```
    jasmine.createSpyObj(WeatherService.name, [
      'getCurrentWeather', 'getCurrentWeatherByCoords', 'updateCurrentWeather'
    ])
    addPropertyAsBehaviorSubject(weatherServiceSpy, 'currentWeather$')
```

### addProperty(object: object, propertyName: string, valueToReturn: object)

When creating a mock object, add a property to that object with a property getter, so you can use a jasmine.spyOnProperty.

Usage

```
  weatherServiceMock = jasmine.createSpyObj('WeatherService', ['getCurrentWeather'])
  addPropertyAsBehaviorSubject(weatherServiceMock, 'currentWeather', null)
  ...
  spyOnProperty(weatherServiceMock, 'currentWeather$').and.returnValue({ temp = 72})
```

### addPropertyAsBehaviorSubject(object: object, propertyName: string)

Convenience method to configure a property as a BehaviorSubject, so you can update its value before each test by calling .next on it.

Usage

```
  weatherServiceMock = jasmine.createSpyObj('WeatherService', ['getCurrentWeather'])
  addPropertyAsBehaviorSubject(weatherServiceMock, 'currentWeather$')
  ...
  weatherServiceMock.currentWeather$.next(fakeWeather)
```

### createComponentMock(className: string, selectorName?: string, template = '')

Creates a mock class decorated with @Component, if not specified selector is inferred to be MyClassComponent -> app.

Replaces boilerplate

```
@Component({
  selector: 'app-current-weather',
  template: '',
})
class MockCurrentWeatherComponent {}
```

Option to override empty template.

Usage

```
TestBed.configureTestingModule({
      declarations: [ ..., createComponentMock('CurrentWeatherComponent')]
      ...
})
```

Inferred selector in the above example is 'app-current-weather'.

### getAllFunctions(prototype: any, props?: (string | number | symbol)[])

Helper function that return all functions in a given Class using reflection, so you don't have to provide an instance of the object.

### getAllProperties(prototype: any, props?: (string | number | symbol)[])

Helper function that return all property getters in a given Class using reflection, so you don't have to provide an instance of the object.

## Contributing

- Send PR, will accept
- To setup the project, run `npm install`
- Test against the example project listed below using `npm link`
- To publish the project, run `npm version major|minor|patch`
  > Read more about that setup by Isaac Schlueter [here](https://blog.npmjs.org/post/184553141742/easy-automatic-npm-publishes)
