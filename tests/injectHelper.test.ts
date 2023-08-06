import 'zone.js/dist/zone'
import 'zone.js/dist/long-stack-trace-zone'
import 'zone.js/dist/proxy'
import 'zone.js/dist/sync-test'
import 'zone.js/dist/jasmine-patch'
import 'zone.js/dist/async-test'
import 'zone.js/dist/fake-async-test'
import { describe, expect, test, beforeEach } from '@jest/globals'
import { TestBedStatic } from '@angular/core/testing'

import { injectClass, injectSpy } from '../src/index'
import { AbstractWeatherService, WeatherService } from './testObjects'

describe('injectHelper', () => {
  let testBedMock: jasmine.SpyObj<TestBedStatic>
  let weatherServiceMock: jasmine.SpyObj<WeatherService>

  beforeEach(() => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    testBedMock = jasmine.createSpyObj('TestBed', ['inject'])
  })

  test('should injectClass', () => {
    testBedMock.inject.and.returnValue(
      jasmine.createSpyObj('weatherServiceMock', ['foo'])
    )

    weatherServiceMock = injectClass(WeatherService, testBedMock)

    expect(weatherServiceMock).toBeDefined()
  })

  test('should injectClass no mock', () => {
    expect(() => (weatherServiceMock = injectClass(WeatherService))).toThrowError()
  })

  test('should injectSpy', () => {
    testBedMock.inject.and.returnValue(
      jasmine.createSpyObj('weatherServiceMock', ['foo'])
    )

    weatherServiceMock = injectSpy(WeatherService, testBedMock)

    expect(weatherServiceMock).toBeDefined()
  })

  test('should injectSpy no mock', () => {
    expect(() => (weatherServiceMock = injectSpy(WeatherService))).toThrowError()
  })

  test('should injectClass for abstract class', () => {
    testBedMock.inject.and.returnValue(
      jasmine.createSpyObj('weatherServiceMock', ['foo'])
    )

    weatherServiceMock = injectClass(AbstractWeatherService, testBedMock)

    expect(weatherServiceMock).toBeDefined()
  })

  test('should injectSpy for abstract class', () => {
    testBedMock.inject.and.returnValue(
      jasmine.createSpyObj('weatherServiceMock', ['foo'])
    )

    weatherServiceMock = injectSpy(AbstractWeatherService, testBedMock)

    expect(weatherServiceMock).toBeDefined()
  })
})
