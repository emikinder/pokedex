/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Trebuchet MS', ...defaultTheme.fontFamily.sans],
			},
			colors: {
				'display': '#a0dab1',
				'display-shadow': '#7ba788',
				'frame': '#dedede',
				'frame-shadow': '#919090',
				'pokered': '#bd0f34',
				'pokered-shadow': '#780820',
				'pokered-light': '#d5113a',
			},
		},
	},
	plugins: [],
};
