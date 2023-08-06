import { BehaviorSubject, Observable } from 'rxjs'

import { addProperty } from './addProperty'
import { getAllFunctions, getAllProperties } from './getAll'

export enum ObservablePropertyStrategy {
  Object,
  Observable,
  BehaviorSubject,
}

export function autoSpyObj<TClassUnderTest>(
  classUnderTest: NewableFunction,
  spyProperties = [] as string[],
  observableStrategy = ObservablePropertyStrategy.Observable
): jasmine.SpyObj<TClassUnderTest> {
  const props = Reflect.ownKeys(classUnderTest.prototype as object)
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const spyObj: jasmine.SpyObj<TClassUnderTest> = jasmine.createSpyObj(
    classUnderTest.name,
    getAllFunctions(
      classUnderTest.prototype as { [key: string | number | symbol]: unknown },
      props
    )
  )

  const properties = getAllProperties(
    classUnderTest.prototype as { [key: string | number | symbol]: unknown },
    props
  ).concat(spyProperties)

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
