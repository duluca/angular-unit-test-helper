import 'zone.js'
import 'zone.js/testing'

import { BehaviorSubject, Observable } from 'rxjs'

import {
  addProperty,
  addPropertyAsBehaviorSubject,
  addPropertyAsObservable,
} from '../src/index'

describe('addProperty', () => {
  it('should add a property to object with a return value', () => {
    const returnValue = { a: 'fighters' }
    const objectUnderTest = {} as any

    addProperty(objectUnderTest, 'foo', returnValue)

    expect(objectUnderTest.foo).toBeDefined()
    expect(objectUnderTest.foo).toEqual(returnValue)
  })

  it('should add a property to as an observable', () => {
    const returnValue = new Observable()
    const objectUnderTest = {} as any

    addPropertyAsObservable(objectUnderTest, 'foo')

    expect(objectUnderTest.foo).toBeDefined()
    expect(objectUnderTest.foo).toEqual(returnValue)
  })

  it('should add a property to as behaviorsubject', () => {
    const returnValue = new BehaviorSubject(null)
    const objectUnderTest = {} as any

    addPropertyAsBehaviorSubject(objectUnderTest, 'foo')

    expect(objectUnderTest.foo).toBeDefined()
    expect(objectUnderTest.foo).toEqual(returnValue)
  })
})
