module.exports = {
  plugins: ['@babel/plugin-transform-typescript'],
  presets: ['@babel/env'],
  env: {
    cjs: {
      plugins: ['@babel/plugin-transform-typescript'],
      presets: [['@babel/env']]
    },
    test: {
      presets: [['@babel/env', { targets: { node: true } }]]
    },
    esm: {
      plugins: ['@babel/plugin-transform-typescript'],
      presets: [
        [
          '@babel/env',
          {
            modules: false
          }
        ]
      ]
    }
  }
};
