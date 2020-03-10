export function getAllFunctions(prototype: any, props?: (string | number | symbol)[]) {
  if (!props) {
    props = Reflect.ownKeys(prototype)
  }
  return props.filter(e => typeof prototype[e] === 'function')
}

export function getAllProperties(prototype: any, props?: (string | number | symbol)[]) {
  if (!props) {
    props = Reflect.ownKeys(prototype)
  }
  return props.filter(e => typeof prototype[e] !== 'function')
}
