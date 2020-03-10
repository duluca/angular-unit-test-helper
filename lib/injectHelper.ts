import { Type } from '@angular/core'
import { TestBed } from '@angular/core/testing'

export function injectOne<TDependency>(
  dependency: Type<TDependency>,
  _spyObject: jasmine.SpyObj<TDependency>
) {
  _spyObject = TestBed.inject(dependency) as jasmine.SpyObj<TDependency>
}

export function injectMany<TDependency>(
  mockedDependencies: [Type<TDependency>, jasmine.SpyObj<TDependency>][]
) {
  mockedDependencies.forEach(([dependency, mockedDependency]) => {
    injectOne(dependency, mockedDependency)
  })
}




class Foo {

}

let fooMock: jasmine.SpyObj<Foo>

fooMock = jasmine.createSpyObj('blah', [])

class Bar {
}
let barMock: jasmine.SpyObj<Foo>

barMock = jasmine.createSpyObj('blah', [])

injectMany([[Foo, fooMock], [Bar, barMock]])