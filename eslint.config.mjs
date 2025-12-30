import antfu from '@antfu/eslint-config'

export default antfu(
  {
    vue: true,
    jsonc: false,
  },
  {
    rules: {
      'node/prefer-global/process': 'warn',
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      'unused-imports/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    },
  },
)
