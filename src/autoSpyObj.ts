import { jest } from '@jest/globals'

import { createSpyObj } from 'jest-createspyobj'

import { BehaviorSubject, Observable } from 'rxjs'

import { addProperty } from './addProperty'
import { getAllFunctions, getAllProperties } from './getAll'

export enum ObservablePropertyStrategy {
  Object,
  Observable,
  BehaviorSubject,
}

export function spyOnProperty(object: any, methodKey: string) {
  return jest.spyOn(object, Symbol(methodKey), 'get')
}

export function autoSpyObj<TClassUnderTest extends object>(
  classUnderTest: NewableFunction,
  spyProperties = [] as string[],
  observableStrategy = ObservablePropertyStrategy.Observable
): jest.Mocked<TClassUnderTest> {
  const props = Reflect.ownKeys(classUnderTest.prototype)
  const spyObj = createSpyObj<TClassUnderTest>(
    classUnderTest,
    getAllFunctions(classUnderTest.prototype, props)
  ) as jest.Mocked<TClassUnderTest>

  const properties = getAllProperties(classUnderTest.prototype, props).concat(
    spyProperties
  )

  properties.map((name) => {
    let defaultValue = {}

    if (typeof name === 'string' && name.endsWith('$')) {
      defaultValue = getDefaultObservableValue(observableStrategy)
    }

    addProperty(spyObj, name, defaultValue)
  })

  return spyObj
}

function getDefaultObservableValue(strategy: ObservablePropertyStrategy) {
  switch (strategy) {
    case ObservablePropertyStrategy.Object:
      return {}
    case ObservablePropertyStrategy.Observable:
      return new Observable()
    case ObservablePropertyStrategy.BehaviorSubject:
      return new BehaviorSubject(null)
  }
}
