import { Component } from '@angular/core'
import camelToKebabCase from 'camel-to-kebab'
import { __decorate } from 'tslib'

export function createComponentMock(className: string, selectorName?: string) {
  if (!className || !className.endsWith('Component')) {
    throw 'Expected class name to end with Component, but it did not. Provide a valid component class name.'
  }

  if (!selectorName) {
    selectorName = inferSelectorName(className)
  }

  const newClass: any = ((window as any)[className] = () => {})
  return __decorate(
    [Component({ selector: 'app-current-weather', template: '' })],
    newClass
  )
}

function inferSelectorName(className: string) {
  className = className.replace('Component', '')
  className = camelToKebabCase(className)
  return `app-${className}`
}
