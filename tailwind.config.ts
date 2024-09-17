import { join } from 'path';
import type { Config } from 'tailwindcss';
import forms from '@tailwindcss/forms';

import { skeleton } from '@skeletonlabs/tw-plugin';

export default {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')
	],
	darkMode: 'selector',
	theme: {
		extend: {
			animation: {
				gradient: 'gradient 3s linear infinite'
			},
			keyframes: {
				gradient: {
					to: { 'background-position': '200% center' }
				}
			},
			fontFamily: {
				scratchy: ['"Scratchy"', 'system-ui', 'sans-serif'],
				bebas: ['"Bebas Neue"', 'system-ui', 'sans-serif'],
				folks: ['"Folks"', 'system-ui', 'sans-serif'],
				courier: ['"Courier Prime"', 'system-ui', 'sans-serif'],
				akira: ['"Akira"', 'system-ui', 'sans-serif'],
				platNomor: ["'Plat Nomor'", 'system-ui', 'sans-serif']
			},
			colors: {
				'wild-lightgreen': '#D5F785',
				'wild-green': '#9BDD00',
				'wild-darkgreen': '#1A5319',
				'wild-mossgreen': '#B5C18E',
				'wild-beige': '#DEAC80',
				'wild-natural': '#F7DCB9',
				'wild-brown': '#914F1E',
				'wild-seriousblue': '#61A3BA',
				'wild-funblue': '#2192FF'
			}
		}
	},

	plugins: [
		forms,
		require('@tailwindcss/typography'),
		skeleton({
			themes: { preset: [] }
		})
	]
} as Config;
