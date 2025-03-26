/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				title: ['FontBold','sans-serif'],
				title2: ['FontMajor','Major Mono Display','monospace'],
				text1: ['FontLight','sans-serif'],
				text2: ['FontBook','sans-serif'],
				text3: ['FontMedium','sans-serif'],
				textRegular: ['FontRegular', 'sans-serif'],
			},
		},
	},
	plugins: [],
}
