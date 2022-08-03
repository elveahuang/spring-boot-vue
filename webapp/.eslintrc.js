module.exports = {
    root: true,
    env: {
        node: true,
        browser: true,
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    extends: ['prettier', 'plugin:@typescript-eslint/recommended', 'plugin:vue/vue3-recommended'],
    plugins: ['@typescript-eslint', 'prettier'],
    rules: {
        '@typescript-eslint/no-explicit-any': 'off',
    },
};
