import { createComponentMock } from '../src/index'

const window = {} as any

describe('createComponentMock', () => {
  it('should create a mocked component', () => {
    window.hello = 'world'
    createComponentMock('CurrentWeatherComponent')
    expect().nothing()
  })

  it('should throw exception for misnamed component', () => {
    expect(() => createComponentMock('CurrentWeather')).toThrowError()
  })
})
