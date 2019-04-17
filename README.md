# Angular Unit Test Helper
> Helper functions to help write unit tests in Angular using mocks and spies

## Goal
Minimal feature set to bridge obvious gaps in jasmine's support of modern JavaScript features. Ideally, I'd like to be using an auto-mocking library, but they don't play well with Angular's `TestBed` and `RxJS\BehaviorSubject`. 

Here's a great article about auto-mocking libraries: https://hackernoon.com/with-typescript-3-and-substitute-js-you-are-already-missing-out-when-mocking-or-faking-a3b3240c4607.

## Example Projects 

Check out my sample projects:
 - https://github.com/duluca/local-weather-app 
 - https://github.com/duluca/lemon-mart

## Functions

### addProperty(object: object, propertyName: string, valueToReturn: object)

Usage
```
  weatherServiceMock = jasmine.createSpyObj('WeatherService', ['getCurrentWeather'])
  addPropertyAsBehaviorSubject(weatherServiceMock, 'currentWeather$', new BehaviorSubject(null))
```

### addPropertyAsBehaviorSubject(object: object, propertyName: string)

Usage
```
  weatherServiceMock = jasmine.createSpyObj('WeatherService', ['getCurrentWeather'])
  addPropertyAsBehaviorSubject(weatherServiceMock, 'currentWeather$')
```
