module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    babelOptions: {
      configFile: './babel.config.js',
    },
  },
  extends: '@react-native',
};
