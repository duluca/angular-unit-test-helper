interface IObjectPrototype {
  [key: string | number | symbol]: unknown
}

export function getAllFunctions(
  prototype: unknown,
  props?: (string | number | symbol)[]
) {
  if (!props) {
    props = Reflect.ownKeys(prototype as object)
  }
  return props.filter((e) => typeof (prototype as IObjectPrototype)[e] === 'function')
}

export function getAllProperties(
  prototype: unknown,
  props?: (string | number | symbol)[]
) {
  if (!props) {
    props = Reflect.ownKeys(prototype as object)
  }
  return props.filter((e) => typeof (prototype as IObjectPrototype)[e] !== 'function')
}
