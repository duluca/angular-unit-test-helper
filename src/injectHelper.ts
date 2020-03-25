import { AbstractType, Type } from '@angular/core'
import { TestBed } from '@angular/core/testing'

export function injectClass<TDependency>(
  dependency: Type<TDependency> | AbstractType<TDependency>,
  testBed = TestBed
): TDependency {
  return testBed.inject(dependency)
}

export function injectSpy<TDependency>(
  dependency: Type<TDependency> | AbstractType<TDependency>,
  testBed = TestBed
): jasmine.SpyObj<TDependency> {
  return injectClass(dependency, testBed) as jasmine.SpyObj<TDependency>
}
