module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  "settings": {
    "import/resolver": {
      "webpack": {
        "config": "webpack.common.js"
      }
    }
  }
};
