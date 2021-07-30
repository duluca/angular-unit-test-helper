import 'zone.js/dist/zone'
import 'zone.js/dist/long-stack-trace-zone'
import 'zone.js/dist/proxy'
import 'zone.js/dist/sync-test'
import 'zone.js/dist/jasmine-patch'
import 'zone.js/dist/async-test'
import 'zone.js/dist/fake-async-test'

import { createComponentMock } from '../src/index'

let window = {} as any

describe('createComponentMock', () => {
  it('should create a mocked component', () => {
    window = {}
    window.hello = 'world'
    const cc = createComponentMock('CurrentWeatherComponent', undefined, '')
    expect(cc).toBeDefined()
  })

  // it('should create a mocked component with undefined window', () => {
  //   window = undefined
  //   expect(() =>
  //     createComponentMock('CurrentWeatherComponent', undefined, '')
  //   ).toThrowError()
  // })

  it('should create a mocked component with template', () => {
    window = {}
    window.hello = 'world'
    const cc = createComponentMock(
      'CurrentWeatherComponent',
      'app-current-weather',
      `<h1>Hello, World!</h1>`
    )
    expect(cc).toBeDefined()
  })

  it('should throw exception for misnamed component', () => {
    window = {}
    window.hello = 'world'
    expect(() => createComponentMock('CurrentWeather', undefined, '')).toThrowError()
  })

  it('should throw exception for undefined window', () => {
    window = undefined
    expect(() => createComponentMock('CurrentWeather')).toThrowError()
  })
})
