import { BehaviorSubject, Observable } from 'rxjs'

import { addProperty } from './addProperty'
import { getAllFunctions, getAllProperties } from './getAll'

export enum ObservablePropertyStrategy {
  Object,
  Observable,
  BehaviorSubject,
}

export function autoSpyObj(
  classUnderTest: () => void,
  spyProperties: string[] = [],
  observableStrategy = ObservablePropertyStrategy.Observable
) {
  const props = Reflect.ownKeys(classUnderTest.prototype)
  const spyObj = jasmine.createSpyObj(
    classUnderTest.name,
    getAllFunctions(classUnderTest.prototype, props)
  )

  const properties = getAllProperties(classUnderTest.prototype, props).concat(
    spyProperties
  )

  properties.map(name => {
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
