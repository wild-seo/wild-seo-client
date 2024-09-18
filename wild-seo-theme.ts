import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const wildSeoTheme: CustomThemeConfig = {
	name: 'my-custom-theme',
	properties: {
		// =~= Theme Properties =~=
		'--theme-font-family-base': `system-ui`,
		'--theme-font-family-heading': `system-ui`,
		'--theme-font-color-base': '0 0 0',
		'--theme-font-color-dark': '255 255 255',
		'--theme-rounded-base': '24px',
		'--theme-rounded-container': '12px',
		'--theme-border-base': '2px',
		// =~= Theme On-X Colors =~=
		'--on-primary': '255 255 255',
		'--on-secondary': 'var(--color-primary-900)',
		'--on-tertiary': '0 0 0',
		'--on-success': '0 0 0',
		'--on-warning': '0 0 0',
		'--on-error': '255 255 255',
		'--on-surface': 'var(--color-primary-700)',
		// =~= Theme Colors  =~=
		// primary | #914F1E
		'--color-primary-50': '239 229 221', // #efe5dd
		'--color-primary-100': '233 220 210', // #e9dcd2
		'--color-primary-200': '228 211 199', // #e4d3c7
		'--color-primary-300': '211 185 165', // #d3b9a5
		'--color-primary-400': '178 132 98', // #b28462
		'--color-primary-500': '145 79 30', // #914F1E
		'--color-primary-600': '131 71 27', // #83471b
		'--color-primary-700': '109 59 23', // #6d3b17
		'--color-primary-800': '87 47 18', // #572f12
		'--color-primary-900': '71 39 15', // #47270f
		// secondary | #DEAC80
		'--color-secondary-50': '250 243 236', // #faf3ec
		'--color-secondary-100': '248 238 230', // #f8eee6
		'--color-secondary-200': '247 234 223', // #f7eadf
		'--color-secondary-300': '242 222 204', // #f2decc
		'--color-secondary-400': '232 197 166', // #e8c5a6
		'--color-secondary-500': '222 172 128', // #DEAC80
		'--color-secondary-600': '200 155 115', // #c89b73
		'--color-secondary-700': '167 129 96', // #a78160
		'--color-secondary-800': '133 103 77', // #85674d
		'--color-secondary-900': '109 84 63', // #6d543f
		// tertiary | #2192FF
		'--color-tertiary-50': '222 239 255', // #deefff
		'--color-tertiary-100': '211 233 255', // #d3e9ff
		'--color-tertiary-200': '200 228 255', // #c8e4ff
		'--color-tertiary-300': '166 211 255', // #a6d3ff
		'--color-tertiary-400': '100 179 255', // #64b3ff
		'--color-tertiary-500': '33 146 255', // #2192FF
		'--color-tertiary-600': '30 131 230', // #1e83e6
		'--color-tertiary-700': '25 110 191', // #196ebf
		'--color-tertiary-800': '20 88 153', // #145899
		'--color-tertiary-900': '16 72 125', // #10487d
		// success | #9BDD00
		'--color-success-50': '240 250 217', // #f0fad9
		'--color-success-100': '235 248 204', // #ebf8cc
		'--color-success-200': '230 247 191', // #e6f7bf
		'--color-success-300': '215 241 153', // #d7f199
		'--color-success-400': '185 231 77', // #b9e74d
		'--color-success-500': '155 221 0', // #9BDD00
		'--color-success-600': '140 199 0', // #8cc700
		'--color-success-700': '116 166 0', // #74a600
		'--color-success-800': '93 133 0', // #5d8500
		'--color-success-900': '76 108 0', // #4c6c00
		// warning | #EAB308
		'--color-warning-50': '252 244 218', // #fcf4da
		'--color-warning-100': '251 240 206', // #fbf0ce
		'--color-warning-200': '250 236 193', // #faecc1
		'--color-warning-300': '247 225 156', // #f7e19c
		'--color-warning-400': '240 202 82', // #f0ca52
		'--color-warning-500': '234 179 8', // #EAB308
		'--color-warning-600': '211 161 7', // #d3a107
		'--color-warning-700': '176 134 6', // #b08606
		'--color-warning-800': '140 107 5', // #8c6b05
		'--color-warning-900': '115 88 4', // #735804
		// error | #FF0000
		'--color-error-50': '255 217 217', // #ffd9d9
		'--color-error-100': '255 204 204', // #ffcccc
		'--color-error-200': '255 191 191', // #ffbfbf
		'--color-error-300': '255 153 153', // #ff9999
		'--color-error-400': '255 77 77', // #ff4d4d
		'--color-error-500': '255 0 0', // #FF0000
		'--color-error-600': '230 0 0', // #e60000
		'--color-error-700': '191 0 0', // #bf0000
		'--color-error-800': '153 0 0', // #990000
		'--color-error-900': '125 0 0', // #7d0000
		// surface | #F7DCB9
		'--color-surface-50': '254 250 245', // #fefaf5
		'--color-surface-100': '253 248 241', // #fdf8f1
		'--color-surface-200': '253 246 238', // #fdf6ee
		'--color-surface-300': '252 241 227', // #fcf1e3
		'--color-surface-400': '249 231 206', // #f9e7ce
		'--color-surface-500': '247 220 185', // #F7DCB9
		'--color-surface-600': '222 198 167', // #dec6a7
		'--color-surface-700': '185 165 139', // #b9a58b
		'--color-surface-800': '148 132 111', // #94846f
		'--color-surface-900': '121 108 91' // #796c5b
	}
};
