module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }], '@babel/preset-typescript'],
  plugins: [['module-resolver', {
    alias: {
      '@controllers': './src/app/controllers',
      '@models': './src/app/models',
      '@validators': './src/app/validators'
    }
  }]],
  ignore: ['**/*.spec.ts']
}
