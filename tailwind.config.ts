import { join } from 'path';
import type { Config } from 'tailwindcss';
import forms from '@tailwindcss/forms';
// import { wildSeoTheme } from './wild-seo-theme';
import { skeleton } from '@skeletonlabs/tw-plugin';

const randomInt = (min: number, max: number): number => {
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

export default {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')
	],
	darkMode: 'selector',
	theme: {
		extend: {
			wildButton: {},
			animation: {
				gradient: 'gradient 3s linear infinite',
				marquee: 'marquee 20s linear infinite',
				marquee2: 'marquee2 20s linear infinite',
				wind: 'gustRight 10s ease-in-out alternate infinite',
				blurify: 'blurMeOut 8s ease-in-out alternate infinite',
				pulseScale: 'pulseScale 3s ease-in alternate infinite'
			},
			keyframes: {
				gradient: {
					to: { 'background-position': '200% center' }
				},
				marquee: {
					'0%': { transform: 'translateX(0%)' },
					'100%': { transform: 'translateX(-100%)' }
				},
				marquee2: {
					'0%': { transform: 'translateX(100%)' },
					'100%': { transform: 'translateX(0%)' }
				},
				gustRight: {
					from: {
						transform: 'skewY(' + randomInt(-3, 0) + 'deg)'
					},
					to: {
						transform: 'skewY(' + randomInt(0, 6) + 'deg)'
					}
				},
				blurMeOut: {
					from: {
						transform: 'scale(0.85)',
						filter: 'blur(16px)'
					},
					to: {
						transform: 'scale(1)',
						filter: 'blur(4px)'
					}
				},
				pulseScale: {
					from: {
						transform: 'scale(0.8)'
					},
					to: {
						transform: 'scale(1)'
					}
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
				'wild-darkgreen': '#1E5721',
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
			themes: { preset: ['vintage'] }
		})
	]
} as Config;
