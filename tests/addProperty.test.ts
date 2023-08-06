import 'zone.js/dist/zone'
import 'zone.js/dist/long-stack-trace-zone'
import 'zone.js/dist/proxy'
import 'zone.js/dist/sync-test'
import 'zone.js/dist/jasmine-patch'
import 'zone.js/dist/async-test'
import 'zone.js/dist/fake-async-test'
import { describe, expect, test } from '@jest/globals'

import { BehaviorSubject, Observable } from 'rxjs'

import {
  addProperty,
  addPropertyAsBehaviorSubject,
  addPropertyAsObservable,
} from '../src/index'

describe('addProperty', () => {
  test('should add a property to object with a return value', () => {
    const returnValue = { a: 'fighters' }
    const objectUnderTest = { foo: returnValue }

    addProperty(objectUnderTest, 'foo', returnValue)

    expect(objectUnderTest.foo).toBeDefined()
    expect(objectUnderTest.foo).toEqual(returnValue)
  })

  test('should add a property to as an observable', () => {
    const returnValue = new Observable()
    const objectUnderTest = { foo: returnValue }

    addPropertyAsObservable(objectUnderTest, 'foo')

    expect(objectUnderTest.foo).toBeDefined()
    expect(objectUnderTest.foo).toEqual(returnValue)
  })

  test('should add a property to as behaviorsubject', () => {
    const returnValue = new BehaviorSubject(null)
    const objectUnderTest = { foo: returnValue }

    addPropertyAsBehaviorSubject(objectUnderTest, 'foo')

    expect(objectUnderTest.foo).toBeDefined()
    expect(objectUnderTest.foo).toEqual(returnValue)
  })
})
