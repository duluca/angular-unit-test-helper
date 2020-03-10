/// <reference types="jasmine" />
import { Type } from '@angular/core';
export declare function injectOne<TDependency>(dependency: Type<TDependency>, _spyObject: jasmine.SpyObj<TDependency>): void;
export declare function injectMany<TDependency>(mockedDependencies: [Type<TDependency>, jasmine.SpyObj<TDependency>][]): void;
