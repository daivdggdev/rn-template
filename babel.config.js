module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    // 解决TS中的 module 引用问题
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '@': './src',
        },
        extensions: ['.js', '.ts', '.tsx', '.ios.js', '.android.js'],
      },
    ],
    ['import', { libraryName: '@ant-design/react-native' }],
    '@babel/plugin-transform-runtime',
  ],
};
