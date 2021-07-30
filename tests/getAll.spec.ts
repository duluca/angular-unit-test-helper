import 'zone.js/dist/zone'
import 'zone.js/dist/long-stack-trace-zone'
import 'zone.js/dist/proxy'
import 'zone.js/dist/sync-test'
import 'zone.js/dist/jasmine-patch'
import 'zone.js/dist/async-test'
import 'zone.js/dist/fake-async-test'

import { getAllFunctions, getAllProperties } from '../src/index'
import { WeatherService } from './testObjects'

describe('getAll', () => {
  it('should get all properties', () => {
    const allProps = getAllProperties(WeatherService)

    expect(allProps).toBeDefined()
    expect(allProps.length).toBeGreaterThan(1)
  })

  it('should get all functions', () => {
    const allFunks = getAllFunctions(WeatherService)

    expect(allFunks).toBeDefined()
    expect(allFunks.length).toEqual(0)
  })
})
