import 'zone.js/dist/zone'
import 'zone.js/dist/long-stack-trace-zone'
import 'zone.js/dist/proxy'
import 'zone.js/dist/sync-test'
import 'zone.js/dist/jasmine-patch'
import 'zone.js/dist/async-test'
import 'zone.js/dist/fake-async-test'

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
