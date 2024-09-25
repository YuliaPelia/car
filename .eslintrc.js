module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
      'plugin:react/recommended',
      'plugin:@typescript-eslint/recommended',
      'prettier/@typescript-eslint',
      'plugin:prettier/recommended',
    ],
    plugins: ['@typescript-eslint'],
    rules: {
      'prettier/prettier': ['error', { singleQuote: true, semi: false }],
    },
  };
  