module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'space-before-function-paren': 0,
    'no-console': 0,
    // generator 函数 * 不需要空格
    'generator-star-spacing': 'off',
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
