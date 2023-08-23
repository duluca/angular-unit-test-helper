/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type { Config } from 'jest'

const { defaults: tsjPreset } = require('ts-jest/presets')

const config: Config = {
  preset: 'ts-jest',
  globals: {
    tsConfig: 'tsconfig.test.json',
  },
  testPathIgnorePatterns: ['.d.ts', '.js'],
  // transformIgnorePatterns: ['node_modules'],
  // transform: {
  //   '^.+\\.(js|jsx|ts|tsx|mjs)$': 'ts-jest',
  // },
  transform: {
    ...tsjPreset.transform,
    'node_modules/(?!@angular|jest-createspyobj/).+\\.(j|t)sx?$': 'ts-jest',
  },
  transformIgnorePatterns: ['/^node_modules/(?!@angular|jest-createspyobj/).*$/'],
  // extensionsToTreatAsEsm: ['.ts'],
  // All imported modules in your tests should be mocked automatically
  // automock: false,
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: ['/node_modules/', '/tests/'],
  coverageProvider: 'v8',
  coverageThreshold: {
    global: {
      branches: 78,
      lines: 90,
      functions: 88,
      statements: 90,
    },
  },

  testEnvironment: 'jsdom',
  testTimeout: 10000,
}

export default config
