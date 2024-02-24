module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    require.resolve('@datarockets/style-guide/eslint/node'),
    require.resolve('@datarockets/style-guide/eslint/browser'),
    require.resolve('@datarockets/style-guide/eslint/typescript'),
],
  overrides: [
    {
      files: [
        '**/__tests__/**/*.{js,jsx,ts,tsx}',
        '**/?(*.)+(spec|test).{js,jsx,ts,tsx}',
      ],
      extends: [require.resolve('@datarockets/style-guide/eslint/jest')],
    },
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}
