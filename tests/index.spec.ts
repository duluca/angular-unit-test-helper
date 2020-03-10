import { message } from '../src/index'

describe('Index', () => {
  it('should have the correct message', () => {
    expect(message).toEqual('Hello, world!')
  })
})