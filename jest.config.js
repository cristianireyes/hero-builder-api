const { pathsToModuleNameMapper } = require('ts-jest/utils');
const { compilerOptions } = require('./tsconfig');

module.exports = {
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json',
      diagnostics: true,
    },
    NODE_ENV: 'test',
  },
  moduleDirectories: ['node_modules', 'src'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  collectCoverageFrom: [
    'src/**/*.{js,ts}',
    'src/**/**/*.{js,ts}',
    'src/**/**/**/*.{js,ts}',
    'src/**/**/**/**/*.{js,ts}',
    '!<rootDir>/node_modules/',
  ],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: '<rootDir>/',
  }),
  verbose: true,
  coveragePathIgnorePatterns: [
    'node_modules',
    '<rootDir>/src/mocks',
    '<rootDir>/src/__mocks__',
    '<rootDir>/src/__pact__',
    '<rootDir>/dist',
  ],
  testMatch: [
    '**/?(*.)+(spec|test).[jt]s?(x)',
    '**/**/?(*.)+(spec|test).[jt]s?(x)',
    '**/**/**/?(*.)+(spec|test).[jt]s?(x)',
  ],
  modulePathIgnorePatterns: [
    '<rootDir>/src/__pact__/datasources',
    '<rootDir>/src/mocks',
    '.git',
    '<rootDir>/dist',
  ],
  coverageReporters: ['text-summary', 'lcov', 'text', 'cobertura'],
  testEnvironment: 'node',
};
