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
                project: "./tsconfig.json", // 👈 Добавляем анализ типов
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

            "object-curly-spacing": ["error", "always"], // ✅ Добавляет пробелы в { }
            "quotes": ["error", "single"], // ✅ Делает кавычки только одинарными

            // TS
            "@typescript-eslint/no-unsafe-assignment": "off", // ❌ Отключает проверку присвоения `any`
            "@typescript-eslint/no-unsafe-member-access": "off", // ❌ Отключает доступ к `any`
            "@typescript-eslint/no-unsafe-call": "off", // ❌ Отключает вызов `any`
            "@typescript-eslint/no-floating-promises": "off", // ❌ Отключает обязательный `.catch()`
            "@typescript-eslint/prefer-nullish-coalescing": "off",
            '@typescript-eslint/unbound-method': 'off',
            '@typescript-eslint/consistent-type-definitions': 'off',
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
