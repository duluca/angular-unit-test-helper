import { ObservablePropertyStrategy, autoSpyObj } from '../src/index'
import { WeatherService, fakeWeather } from './testObjects'

describe('autoSpyObj', () => {
  let weatherServiceMock: jasmine.SpyObj<WeatherService>

  it('should create a spy', () => {
    const weatherServiceSpy = autoSpyObj({
      classUnderTest: WeatherService,
      spyProperties: ['currentWeather$'],
      observableStrategy: ObservablePropertyStrategy.BehaviorSubject,
    })

    weatherServiceMock = weatherServiceSpy

    weatherServiceMock.currentWeather$.next(fakeWeather)

    weatherServiceMock.currentWeather$.subscribe(current => {
      expect(weatherServiceSpy).toBeDefined()
      expect(weatherServiceMock).toBeDefined()
      expect(current.city).toEqual('Bethesda')
      expect(current.temperature).toEqual(280.32)
    })
  })
})
