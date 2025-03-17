import tseslint from 'typescript-eslint';
import eslint from '@eslint/js';
import eslintReact from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

export default tseslint.config(
    {
        ignores: [
            'public/',
            'eslint.config.js',
            'node_modules/',
            'dist/',
            'build',
            '.yarn'
        ],
    },
    eslint.configs.recommended,
    ...tseslint.configs.recommendedTypeChecked,
    ...tseslint.configs.stylisticTypeChecked,
    eslintReact.configs.flat.recommended,
    {
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "module",
            parserOptions: {
                project: "./tsconfig.json",
                sourceType: "module"
            }
        },
        plugins: {
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh,
        },
        rules: {
            // React
            ...reactHooks.configs.recommended.rules,
            'react/react-in-jsx-scope': 'off',
            'react/jsx-no-useless-fragment': 'off',
            'react/prop-types': 'off',

            "object-curly-spacing": ["error", "always"],
            "quotes": ["error", "single"],

            // TS
            "@typescript-eslint/no-unsafe-assignment": "off",
            "@typescript-eslint/no-unsafe-member-access": "off",
            "@typescript-eslint/no-floating-promises": "off",
            '@typescript-eslint/no-unused-vars': [
                'error',
                {
                    argsIgnorePattern: '^_',
                    varsIgnorePattern: '^_',
                    ignoreRestSiblings: true,
                },
            ],
            '@typescript-eslint/no-explicit-any': ['error'],
            '@typescript-eslint/ban-types': ['off'],
        },
        files: ['**/*.ts', '**/*.tsx', '**/*.cts', '**/*.js', '**/*.jsx', '**/*.cjs'],
        settings: {
            react: {
                version: 'detect',
            },
        },
    },
);
