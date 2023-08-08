import 'zone.js/dist/zone'
import 'zone.js/dist/long-stack-trace-zone'
import 'zone.js/dist/proxy'
import 'zone.js/dist/sync-test'
import 'zone.js/dist/jasmine-patch'
import 'zone.js/dist/async-test'
import 'zone.js/dist/fake-async-test'

import { createComponentMock } from '../src/index'

describe('createComponentMock', () => {
  it('should throw exception for misnamed component', () => {
    expect(() => createComponentMock('CurrentWeather', undefined, '')).toThrowError()
  })

  it('should throw exception for undefined window', () => {
    expect(() => createComponentMock('CurrentWeather')).toThrowError()
  })
})
