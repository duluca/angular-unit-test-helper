import { createComponentMock } from '../src'

const window = {} as any

describe('createComponentMock', () => {
  it('should create a mocked component', () => {
    window.hello = 'world'
    createComponentMock('CurrentWeatherComponent')
    expect().nothing()
  })
})
