module.exports = {
    verbose: true,
    roots: ['<rootDir>/src'],
    collectCoverage: true,
    coverageDirectory: 'coverage',
    testPathIgnorePatterns: ['/node_modules/', '.*fixture.js', '/fixtures/'],
    coveragePathIgnorePatterns: ['/node_modules/', '.*fixture.js', '/fixtures/'],
  };