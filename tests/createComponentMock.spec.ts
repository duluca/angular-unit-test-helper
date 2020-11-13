import { createComponentMock } from '../src/index'
const window = {} as any
describe('createComponentMock', () => {
  it('should create a mocked component', () => {
    window.hello = 'world'
    const cc = createComponentMock('CurrentWeatherComponent', undefined, '', () => window)
    expect(cc).toBeDefined()
  })

  it('should create a mocked component with undefined window', () => {
    expect(() =>
      createComponentMock('CurrentWeatherComponent', undefined, '', undefined)
    ).toThrowError()
  })

  it('should create a mocked component with template', () => {
    const cc = createComponentMock(
      'CurrentWeatherComponent',
      'app-current-weather',
      `<h1>Hello, World!</h1>`,
      () => window
    )
    expect(cc).toBeDefined()
  })

  it('should throw exception for misnamed component', () => {
    expect(() =>
      createComponentMock('CurrentWeather', undefined, '', () => window)
    ).toThrowError()
  })

  it('should throw exception for undefined window', () => {
    expect(() => createComponentMock('CurrentWeather')).toThrowError()
  })
})
