import { jest } from '@jest/globals'

import { AbstractType, Type } from '@angular/core'
import { TestBed } from '@angular/core/testing'

export function injectClass<TDependency extends object>(
  dependency: Type<TDependency> | AbstractType<TDependency>,
  testBed = TestBed
): jest.Mocked<TDependency> {
  return testBed.inject(dependency) as jest.Mocked<TDependency>
}

export function injectSpy<TDependency extends object>(
  dependency: Type<TDependency> | AbstractType<TDependency>,
  testBed = TestBed
): jest.Mocked<TDependency> {
  return injectClass(dependency, testBed) as jest.Mocked<TDependency>
}
