import 'zone.js/dist/zone'
import 'zone.js/dist/long-stack-trace-zone'
import 'zone.js/dist/proxy'
import 'zone.js/dist/sync-test'
import 'zone.js/dist/jasmine-patch'
import 'zone.js/dist/async-test'
import 'zone.js/dist/fake-async-test'
import { describe, expect, test } from '@jest/globals'
import { Observable } from 'rxjs'

import { ObservablePropertyStrategy, autoSpyObj } from '../src/index'
import { WeatherService, fakeWeather } from './testObjects'

describe('autoSpyObj', () => {
  let weatherServiceMock: jasmine.SpyObj<WeatherService>

  test('should create a spy as a behaviorsubject', () => {
    const weatherServiceSpy = autoSpyObj<WeatherService>(
      WeatherService,
      ['currentWeather$'],
      ObservablePropertyStrategy.BehaviorSubject
    )

    weatherServiceMock = weatherServiceSpy

    weatherServiceMock.currentWeather$.next(fakeWeather)

    weatherServiceMock.currentWeather$.subscribe((current) => {
      expect(weatherServiceSpy).toBeDefined()
      expect(weatherServiceMock).toBeDefined()
      expect(current.city).toEqual('Bethesda')
      expect(current.temperature).toEqual(280.32)
    })
  })

  test('should create a spy for a property getter', () => {
    const weatherServiceSpy = autoSpyObj<WeatherService>(WeatherService, ['color'])

    weatherServiceMock = weatherServiceSpy

    spyOnProperty(weatherServiceMock, 'color').and.returnValue('yellow')

    expect(weatherServiceSpy).toBeDefined()
    expect(weatherServiceMock).toBeDefined()
    expect(weatherServiceMock.color).toEqual('yellow')
  })

  test('should create a spy as observable', () => {
    const weatherServiceSpy = autoSpyObj<WeatherService>(
      WeatherService,
      ['currentWeather$'],
      ObservablePropertyStrategy.Observable
    )

    weatherServiceMock = weatherServiceSpy

    expect(weatherServiceMock.currentWeather$).toBeInstanceOf(Observable)
  })

  test('should create a spy as object', () => {
    const weatherServiceSpy = autoSpyObj<WeatherService>(
      WeatherService,
      ['currentWeather$'],
      ObservablePropertyStrategy.Object
    )

    weatherServiceMock = weatherServiceSpy

    expect(weatherServiceMock.currentWeather$).toBeInstanceOf(Object)
  })

  test('should create a spy with defaults', () => {
    const weatherServiceSpy = autoSpyObj<WeatherService>(WeatherService)

    expect(weatherServiceSpy).toBeDefined()
  })
})
