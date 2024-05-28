module.exports = {
  extends: '@m-fe/eslint-config/base',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  rules: {
    '@typescript-eslint/member-naming': 0,
    '@typescript-eslint/no-extraneous-class': 0,
  },
};
