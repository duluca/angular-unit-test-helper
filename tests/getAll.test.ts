import 'zone.js/dist/zone'
import 'zone.js/dist/long-stack-trace-zone'
import 'zone.js/dist/proxy'
import 'zone.js/dist/sync-test'
import 'zone.js/dist/jasmine-patch'
import 'zone.js/dist/async-test'
import 'zone.js/dist/fake-async-test'
import { describe, expect, test } from '@jest/globals'
import { getAllFunctions, getAllProperties } from '../src/index'
import { WeatherService } from './testObjects'

describe('getAll', () => {
  test('should get all properties', () => {
    const allProps = getAllProperties(WeatherService)

    expect(allProps).toBeDefined()
    expect(allProps.length).toBeGreaterThan(1)
  })

  test('should get all functions', () => {
    const allFunks = getAllFunctions(WeatherService)

    expect(allFunks).toBeDefined()
    // eslint-disable-next-line jest/prefer-to-have-length
    expect(allFunks.length).toEqual(0)
  })
})
