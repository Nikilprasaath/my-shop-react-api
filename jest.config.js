export default {
    testEnvironment: "jsdom",
    transform: {
      "^.+\\.tsx?$": "ts-jest"
    },
    moduleNameMapper: {
      "\\.(css|less|sass|scss)$": "identity-obj-proxy"
    },
    setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
    transformIgnorePatterns: ["/node_modules/(?!(axios)/)"],
    collectCoverageFrom: [
      "src/**/*.{js,jsx,ts,tsx}",
      "!<rootDir>/node_modules/",
      "!<rootDir>/config/",
      "!<rootDir>/assets/",
      "!<rootDir>/src/stories/*.{js,jsx,ts,tsx}",
      "!<rootDir>/src/main.tsx",
      "!<rootDir>/src/__tests__/*.tsx" // Exclude all .tsx files
    ],
    coverageThreshold: {
      global: {
        branches: 80,
        functions: 80,
        lines: 80,
        statements: 80
      }
    }
  };