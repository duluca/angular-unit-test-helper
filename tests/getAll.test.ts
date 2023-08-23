import { jest, describe, expect, test, beforeEach, afterEach } from '@jest/globals'

import { getAllFunctions, getAllProperties } from '../dist/index.js'
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
    expect(allFunks.length).toEqual(0)
  })
})
