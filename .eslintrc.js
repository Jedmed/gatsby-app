module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  parser: 'babel-eslint',
  extends: ['airbnb', 'prettier'],
  plugins: ['prettier'],
  settings: {
    'import/resolver': {
      node: {
        moduleDirectory: ['node_modules', 'src/'],
      },
    },
  },
  rules: {
    'prettier/prettier': ['error'],
    'react/prefer-stateless-function': 'off',
    'react/jsx-filename-extension': 'off',
    'no-use-before-define': 'off',
    'react/jsx-closing-bracket-location': 'off',
    'react/jsx-curly-spacing': 'off',
    'react/jsx-equals-spacing': 'off',
    'react/jsx-first-prop-new-line': 'off',
    'react/jsx-indent': 'off',
    'react/jsx-indent-props': 'off',
    'react/jsx-max-props-per-line': 'off',
    'react/jsx-tag-spacing': 'off',
    'react/jsx-wrap-multilines': 'off',
    'import/prefer-default-export': 'off',
    'react/jsx-fragments': 'off',
  },
}
