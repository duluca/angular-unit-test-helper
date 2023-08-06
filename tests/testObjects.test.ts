import 'zone.js/dist/zone'
import 'zone.js/dist/long-stack-trace-zone'
import 'zone.js/dist/proxy'
import 'zone.js/dist/sync-test'
import 'zone.js/dist/jasmine-patch'
import 'zone.js/dist/async-test'
import 'zone.js/dist/fake-async-test'
import { describe, expect, test } from '@jest/globals'
import { WeatherService, fakeWeather } from './testObjects'

describe('testObjects', () => {
  test('should make unit testing gods happy', () => {
    const weatherService = new WeatherService('foo', 'fighters')

    weatherService.currentWeather$.next(fakeWeather)

    weatherService.currentWeather$.subscribe((current) => {
      expect(weatherService).toBeDefined()
      expect(current.city).toEqual('Bethesda')
      expect(current.temperature).toEqual(280.32)
    })
  })
})
