module.exports = {
  env: {
    node: true,
  },
  extends: [
    'eslint:recommended',
    "plugin:vue/vue3-recommended",
    "prettier"
  ],
  rules: {
    "vue/no-unused-vars": "off",
    "vue/require-default-prop": "off",
    "no-debugger":"off",
    "vue/v-on-event-hyphenation": ["always", {
      "autofix": true,
    }]
  }
}
