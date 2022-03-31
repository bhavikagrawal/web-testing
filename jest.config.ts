import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  verbose: true,
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  moduleNameMapper: {
    "\\.(scss|sass|css|jpg|jpeg|png|gif|eot|otf|woff|woff2|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/src/__tests__/__mocks__/mock-module.js",
  },
  testEnvironment: "jsdom",
};

export default config;
