module.exports = {
  extends: ['airbnb-base', 'plugin:prettier/recommended'],
  plugins: ['import', 'prettier'],
  globals: {
    preval: true,
  },
  env: {
    jest: true,
  },
  rules: {
    'prettier/prettier': 'error',
  },
};
