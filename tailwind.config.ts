import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				'wild-lightgreen': '#D5F785'
			}
		}
	},

	plugins: [require('@tailwindcss/typography')]
} as Config;
