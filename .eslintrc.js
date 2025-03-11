module.exports = {
    rules: {
      'vue/multi-word-component-names': 'off'
    },
    extends: [
        'plugin:vue/vue3-recommended' // Vue 3 项目
        // 或者 'plugin:vue/recommended' 如果是 Vue 2
    ],
    parserOptions: {
        ecmaVersion: 2020, // 确保支持 ES6+ 语法
        sourceType: 'module' // 允许使用 import/export
      }
  };