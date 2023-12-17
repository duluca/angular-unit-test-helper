import 'zone.js'
import 'zone.js/testing'

import { TestBedStatic } from '@angular/core/testing'

import { injectClass, injectSpy } from '../src/index'
import { AbstractWeatherService, WeatherService } from './testObjects'

describe('injectHelper', () => {
  let testBedMock: jasmine.SpyObj<TestBedStatic>
  let weatherServiceMock: jasmine.SpyObj<WeatherService>

  beforeEach(() => {
    testBedMock = jasmine.createSpyObj('TestBed', ['inject'])
  })

  it('should injectClass', () => {
    testBedMock.inject.and.returnValue(
      jasmine.createSpyObj('weatherServiceMock', ['foo'])
    )

    weatherServiceMock = injectClass(WeatherService, testBedMock)

    expect(weatherServiceMock).toBeDefined()
  })

  it('should injectClass no mock', () => {
    expect(() => (weatherServiceMock = injectClass(WeatherService))).toThrowError()
  })

  it('should injectSpy', () => {
    testBedMock.inject.and.returnValue(
      jasmine.createSpyObj('weatherServiceMock', ['foo'])
    )

    weatherServiceMock = injectSpy(WeatherService, testBedMock)

    expect(weatherServiceMock).toBeDefined()
  })

  it('should injectSpy no mock', () => {
    expect(() => (weatherServiceMock = injectSpy(WeatherService))).toThrowError()
  })

  it('should injectClass for abstract class', () => {
    testBedMock.inject.and.returnValue(
      jasmine.createSpyObj('weatherServiceMock', ['foo'])
    )

    weatherServiceMock = injectClass(AbstractWeatherService, testBedMock)

    expect(weatherServiceMock).toBeDefined()
  })

  it('should injectSpy for abstract class', () => {
    testBedMock.inject.and.returnValue(
      jasmine.createSpyObj('weatherServiceMock', ['foo'])
    )

    weatherServiceMock = injectSpy(AbstractWeatherService, testBedMock)

    expect(weatherServiceMock).toBeDefined()
  })
})
