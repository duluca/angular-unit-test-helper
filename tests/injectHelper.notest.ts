import { jest, describe, expect, test, beforeEach } from '@jest/globals'

import { TestBedStatic, TestBed } from '@angular/core/testing'

import { createSpyObj } from 'jest-createspyobj'

import { injectClass, injectSpy } from '../src/index'
import { AbstractWeatherService, WeatherService } from './testObjects'

describe('injectHelper', () => {
  let testBedMock: jest.MockedClass<TestBedStatic>
  let weatherServiceMock: jest.Mocked<WeatherService>

  beforeEach(() => {
    testBedMock = jest.mocked(TestBed)
    //testBedMock = createSpyObj(TestBed, ['inject'])
  })

  test('should injectClass', () => {
    testBedMock.inject.mockReturnValue(
      jasmine.createSpyObj('weatherServiceMock', ['foo'])
    )

    weatherServiceMock = injectClass(WeatherService, testBedMock)

    expect(weatherServiceMock).toBeDefined()
  })

  test('should injectClass no mock', () => {
    expect(() => (weatherServiceMock = injectClass(WeatherService))).toThrowError()
  })

  test('should injectSpy', () => {
    testBedMock.inject.mockReturnValue(
      jasmine.createSpyObj('weatherServiceMock', ['foo'])
    )

    weatherServiceMock = injectSpy(WeatherService, testBedMock)

    expect(weatherServiceMock).toBeDefined()
  })

  test('should injectSpy no mock', () => {
    expect(() => (weatherServiceMock = injectSpy(WeatherService))).toThrowError()
  })

  test('should injectClass for abstract class', () => {
    testBedMock.inject.mockReturnValue(
      jasmine.createSpyObj('weatherServiceMock', ['foo'])
    )

    weatherServiceMock = injectClass(AbstractWeatherService, testBedMock)

    expect(weatherServiceMock).toBeDefined()
  })

  test('should injectSpy for abstract class', () => {
    testBedMock.inject.mockReturnValue(
      jasmine.createSpyObj('weatherServiceMock', ['foo'])
    )

    weatherServiceMock = injectSpy(AbstractWeatherService, testBedMock)

    expect(weatherServiceMock).toBeDefined()
  })
})
