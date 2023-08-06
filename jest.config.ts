/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type { Config } from 'jest'

const config: Config = {
  preset: 'jest-preset-angular',
  testPathIgnorePatterns: ['.d.ts', '.js'],
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
