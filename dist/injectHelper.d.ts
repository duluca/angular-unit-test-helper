/// <reference types="jasmine" />
import { Type } from '@angular/core';
export declare function injectOne<TDependency, TReturn>(dependency: Type<TDependency>, testBed?: import("@angular/core/testing").TestBedStatic): TReturn;
export declare function injectSpy<TDependency>(dependency: Type<TDependency>, testBed?: import("@angular/core/testing").TestBedStatic): jasmine.SpyObj<TDependency>;
