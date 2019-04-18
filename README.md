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