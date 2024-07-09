/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {

		extend: {
			colors: {
				'regulus': "#011830",
			},
			fontFamily: {
				sans: ['"Open Sans"', ...defaultTheme.fontFamily.sans],
			}
		},
	},
	plugins: [],
}
