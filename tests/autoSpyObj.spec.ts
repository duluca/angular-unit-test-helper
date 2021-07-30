import 'zone.js/dist/zone'
import 'zone.js/dist/long-stack-trace-zone'
import 'zone.js/dist/proxy'
import 'zone.js/dist/sync-test'
import 'zone.js/dist/jasmine-patch'
import 'zone.js/dist/async-test'
import 'zone.js/dist/fake-async-test'

import { Observable } from 'rxjs'

import { ObservablePropertyStrategy, autoSpyObj } from '../src/index'
import { WeatherService, fakeWeather } from './testObjects'

describe('autoSpyObj', () => {
  let weatherServiceMock: jasmine.SpyObj<WeatherService>

  it('should create a spy as a behaviorsubject', () => {
    const weatherServiceSpy = autoSpyObj(
      WeatherService,
      ['currentWeather$'],
      ObservablePropertyStrategy.BehaviorSubject
    )

    weatherServiceMock = weatherServiceSpy as any

    weatherServiceMock.currentWeather$.next(fakeWeather)

    weatherServiceMock.currentWeather$.subscribe((current) => {
      expect(weatherServiceSpy).toBeDefined()
      expect(weatherServiceMock).toBeDefined()
      expect(current.city).toEqual('Bethesda')
      expect(current.temperature).toEqual(280.32)
    })
  })

  it('should create a spy for a property getter', () => {
    const weatherServiceSpy = autoSpyObj(WeatherService, ['color'])

    weatherServiceMock = weatherServiceSpy as any

    spyOnProperty(weatherServiceMock, 'color').and.returnValue('yellow')

    expect(weatherServiceSpy).toBeDefined()
    expect(weatherServiceMock).toBeDefined()
    expect(weatherServiceMock.color).toEqual('yellow')
  })

  it('should create a spy as observable', () => {
    const weatherServiceSpy = autoSpyObj(
      WeatherService,
      ['currentWeather$'],
      ObservablePropertyStrategy.Observable
    )

    weatherServiceMock = weatherServiceSpy as any

    expect(weatherServiceMock.currentWeather$).toBeInstanceOf(Observable)
  })

  it('should create a spy as object', () => {
    const weatherServiceSpy = autoSpyObj(
      WeatherService,
      ['currentWeather$'],
      ObservablePropertyStrategy.Object
    )

    weatherServiceMock = weatherServiceSpy as any

    expect(weatherServiceMock.currentWeather$).toBeInstanceOf(Object)
  })

  it('should create a spy with defaults', () => {
    const weatherServiceSpy = autoSpyObj(WeatherService)

    expect(weatherServiceSpy).toBeDefined()
  })
})
