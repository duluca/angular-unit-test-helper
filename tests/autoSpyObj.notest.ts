import { jest, describe, expect, test, beforeEach, afterEach } from '@jest/globals'

import { Observable } from 'rxjs'

import { ObservablePropertyStrategy, autoSpyObj, spyOnProperty } from 'dist/index.js'
import { WeatherService, fakeWeather } from './testObjects'

describe('autoSpyObj', () => {
  let weatherServiceMock: jest.Mocked<WeatherService>

  test('should create a spy as a behaviorsubject', () => {
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

  test('should create a spy for a property getter', () => {
    const weatherServiceSpy = autoSpyObj(WeatherService, ['color'])

    weatherServiceMock = weatherServiceSpy as any

    spyOnProperty(weatherServiceMock, 'color').mockReturnValue('yellow')

    expect(weatherServiceSpy).toBeDefined()
    expect(weatherServiceMock).toBeDefined()
    expect(weatherServiceMock.color).toEqual('yellow')
  })

  test('should create a spy as observable', () => {
    const weatherServiceSpy = autoSpyObj(
      WeatherService,
      ['currentWeather$'],
      ObservablePropertyStrategy.Observable
    )

    weatherServiceMock = weatherServiceSpy as any

    expect(weatherServiceMock.currentWeather$).toBeInstanceOf(Observable)
  })

  test('should create a spy as object', () => {
    const weatherServiceSpy = autoSpyObj(
      WeatherService,
      ['currentWeather$'],
      ObservablePropertyStrategy.Object
    )

    weatherServiceMock = weatherServiceSpy as any

    expect(weatherServiceMock.currentWeather$).toBeInstanceOf(Object)
  })

  test('should create a spy with defaults', () => {
    const weatherServiceSpy = autoSpyObj(WeatherService)

    expect(weatherServiceSpy).toBeDefined()
  })
})
