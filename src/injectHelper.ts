import { Type } from '@angular/core'
import { TestBed } from '@angular/core/testing'

export function injectClass<TDependency, TReturn>(
  dependency: Type<TDependency>,
  testBed = TestBed
): TReturn {
  return testBed.inject(dependency) as any
}

export function injectSpy<TDependency>(
  dependency: Type<TDependency>,
  testBed = TestBed
): jasmine.SpyObj<TDependency> {
  return injectClass<TDependency, jasmine.SpyObj<TDependency>>(dependency, testBed)
}
