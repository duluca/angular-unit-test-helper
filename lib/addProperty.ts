import { BehaviorSubject } from 'rxjs'

export function addProperty(object: object, propertyName: string, valueToReturn: object) {
  Object.defineProperty(object, propertyName, {
    get: () => valueToReturn,
    enumerable: true,
    configurable: true,
  })
}

export function addPropertyAsBehaviorSubject(object: object, propertyName: string) {
  addProperty(object, propertyName, new BehaviorSubject(null))
}
