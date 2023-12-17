import 'zone.js'
import 'zone.js/testing'

import { WeatherService, fakeWeather } from './testObjects'

describe('testObjects', () => {
  it('should make unit testing gods happy', () => {
    const weatherService = new WeatherService('foo', 'fighters')

    weatherService.currentWeather$.next(fakeWeather)

    weatherService.currentWeather$.subscribe((current) => {
      expect(weatherService).toBeDefined()
      expect(current.city).toEqual('Bethesda')
      expect(current.temperature).toEqual(280.32)
    })
  })
})
