module.exports = {
  testEnvironment: 'node',
  testMatch: ['**/*.test.js'],
  coveragePathIgnorePatterns: ['/node_modules/'],
  setupFilesAfterEnv: ['./src/tests/setup.js']
}; 