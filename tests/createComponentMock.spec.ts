import { createComponentMock } from '../src/index'

const window = {} as any

describe('createComponentMock', () => {
  it('should create a mocked component', () => {
    window.hello = 'world'
    createComponentMock('CurrentWeatherComponent')
    expect().nothing()
  })

  it('should create a mocked component with template', () => {
    window.hello = 'world'
    createComponentMock(
      'CurrentWeatherComponent',
      'app-current-weather',
      `<h1>Hello, World!</h1>`
    )
    expect().nothing()
  })

  it('should throw exception for misnamed component', () => {
    expect(() => createComponentMock('CurrentWeather')).toThrowError()
  })
})
