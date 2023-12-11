const config = {
  verbose: true,
  testEnvironment: 'node',
  transformIgnorePatterns: [
    '<rootDir>/node_modules/',
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],

};

module.exports = config;
