module.exports = {
	env: {
		browser: true,
		es6: true,
	},
	extends: ['airbnb', 'prettier', 'prettier/react'],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 2018,
		sourceType: 'module',
	},
	plugins: ['prettier', 'react', 'react-hooks'],
	rules: {
		// Prettier ✨
		'prettier/prettier': 'error',

		// ESLint
		'no-console': 'error',
		'no-tabs': 'off',
		'padded-blocks': 'off',

		// eslint-plugin-react
		'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
	},
};
