const tsParser = require('@typescript-eslint/parser')
const reactPlugin = require('eslint-plugin-react')
const tsPlugin = require('@typescript-eslint/eslint-plugin')
const reactHooksPlugin = require('eslint-plugin-react-hooks')

module.exports = [
	{
		files: ['**/*.{js,jsx,ts,tsx}'],
		languageOptions: {
			ecmaVersion: '2021',
			sourceType: 'module',
			parser: tsParser,
			parserOptions: {
				ecmaFeatures: {
					jsx: true,
				},
			},
		},
		env: {
			node: true,
			es2021: true,
		},
		plugins: {
			'@typescript-eslint': tsPlugin,
			react: reactPlugin,
			'react-hooks': reactHooksPlugin,
		},
		rules: {
			'import/order': 'off',
			'@typescript-eslint/no-explicit-any': 'off',
			'react/react-in-jsx-scope': 'off',
			'react/display-name': 'off',
			'@typescript-eslint/no-unused-vars': 'warn',
		},
		settings: {
			react: {
				version: 'detect', // Automatically detect React version
			},
		},
		extends: [
			'eslint:recommended',
			'plugin:@typescript-eslint/recommended',
			'plugin:react/recommended',
			'plugin:react-hooks/recommended',
		],
	},
]
