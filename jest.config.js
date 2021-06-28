// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  // The root directory that Jest should scan for tests and modules within
  rootDir: "./",
  // The glob patterns Jest uses to detect test files
  testMatch: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[tj]s?(x)"],

  // An array of regexp pattern strings that are matched against all test paths, matched tests are skipped
  testPathIgnorePatterns: ["/node_modules/"],

  // The regexp pattern or array of patterns that Jest uses to detect test files
  // testRegex: [],

  // Indicates whether each individual test should be reported during the run
  verbose: true,

  // Whether to use watchman for file crawling
  // watchman: true,

  setupFilesAfterEnv: ["<rootDir>/jest-setup.js"],
};