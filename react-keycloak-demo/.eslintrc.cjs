module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: [
    'dist',
    '.eslintrc.cjs',
    'node_modules/*',
    'vite.config.ts',
    'vite-env.d.ts',
    'App.tsx'
  ],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh', 'check-file'],
  rules: {
    'react/jsx-no-target-blank': 'off',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'check-file/no-index': 'error',
    'check-file/filename-naming-convention': [
      'error',
      {
        '**/*.{js,ts,jsx,tsx}': 'SNAKE_CASE'
      }
    ],
    'check-file/folder-naming-convention': [
      'error',
      {
        'src/**/*': 'SNAKE_CASE',
      },
    ]
  },
}
