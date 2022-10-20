/**
 * @type {import('eslint').Linter.Config}
 */
const config = {
    env: {
        browser: true,
        es2021: true
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended'
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module'
    },
    plugins: [
        '@typescript-eslint',
        'svelte3'
    ],
    rules: {
        '@typescript-eslint/indent': [
            'error',
            4,
            { SwitchCase: 1 }
        ],
        'linebreak-style': [
            'error',
            'unix'
        ],
        'quotes': [
            'error',
            'single',
            { allowTemplateLiterals: true }
        ],
        'semi': [
            'error',
            'always'
        ],
        'no-var': 'error',
        'eqeqeq': [
            'error',
            'always'
        ]
    },
    overrides: [
        {
            files: ['*.svelte'],
            processor: 'svelte3/svelte3'
        }
    ],
    settings: {
        'svelte3/typescript': () => require('typescript'),
        'svelte3/ignore-styles': () => true
    }
};

module.exports = config;
