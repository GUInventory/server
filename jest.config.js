const path = require('path')

module.exports = {
  preset: 'ts-jest',
  testEnvironment: path.join(__dirname, 'prisma', 'setup-environment.js'),
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
}
