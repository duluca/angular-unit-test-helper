import 'zone.js'
import 'zone.js/testing'

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
