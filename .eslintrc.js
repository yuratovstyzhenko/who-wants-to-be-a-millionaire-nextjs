module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  extends: ['next/core-web-vitals', 'airbnb', 'airbnb-typescript'],
  plugins: ['@typescript-eslint'],
  rules: {},
};
