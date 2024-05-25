module.exports = function (api) {
  api.cache(true)
  return {
    presets: [["module:metro-react-native-babel-preset", { jsxRuntime: 'automatic' }]],
    plugins: ['react-native-reanimated/plugin',"@babel/plugin-transform-private-methods"],
  }
}



