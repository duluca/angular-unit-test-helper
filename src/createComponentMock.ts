import { Component } from '@angular/core'
import camelToKebabCase from 'camel-to-kebab'
import { __decorate } from 'tslib'

export function createComponentMock(
  className: string,
  selectorName?: string,
  template = ''
) {
  if (!className || !className.endsWith('Component')) {
    throw new Error(
      'Expected class name to end with Component, but it did not. Provide a valid component class name.'
    )
  }

  if (!selectorName) {
    selectorName = inferSelectorName(className)
  }

  const newClass = (getWindow()[className] = () => {})
  return __decorate(
    [Component({ selector: selectorName, template })],
    newClass
  ) as Component
}

function getWindow(): { [key: string]: unknown } {
  if (typeof window === 'undefined') {
    return {}
  }

  // @ts-expect-error - Returns window from browser
  return window
}

function inferSelectorName(className: string): string {
  className = className.replace('Component', '')
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  className = camelToKebabCase(className) as string
  return `app-${className}`
}
