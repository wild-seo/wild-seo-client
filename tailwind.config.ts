import { join } from 'path';
import type { Config } from 'tailwindcss';

import { skeleton } from '@skeletonlabs/tw-plugin';

export default {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')
	],
	theme: {
		extend: {
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
		require('@tailwindcss/typography'),
		skeleton({
			themes: { preset: [] }
		})
	]
} as Config;
