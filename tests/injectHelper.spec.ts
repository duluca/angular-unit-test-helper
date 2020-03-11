import { TestBedStatic } from '@angular/core/testing'

import { injectOne, injectSpy } from '../src/index'
import { WeatherService } from './testObjects'

describe('injectHelper', () => {
  let testBedMock: jasmine.SpyObj<TestBedStatic>
  let weatherServiceMock: jasmine.SpyObj<WeatherService>

  beforeEach(() => {
    testBedMock = jasmine.createSpyObj('TestBed', ['inject'])
  })

  it('should injectOne', () => {
    testBedMock.inject.and.returnValue(
      jasmine.createSpyObj('weatherServiceMock', ['foo'])
    )

    weatherServiceMock = injectOne(WeatherService, testBedMock)

    expect(weatherServiceMock).toBeDefined()
  })

  it('should injectSpy', () => {
    testBedMock.inject.and.returnValue(
      jasmine.createSpyObj('weatherServiceMock', ['foo'])
    )

    weatherServiceMock = injectSpy(WeatherService, testBedMock)

    expect(weatherServiceMock).toBeDefined()
  })
})
