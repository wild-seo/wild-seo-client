import { fail } from '@sveltejs/kit';
import isUrlHttp from 'is-url-http';

export function load({ setHeaders }) {
	setHeaders({});
}

export const actions = {
	enquire: async ({ request }) => {
		const formData = await request.formData();

		if (!formData.get('website')) return { warning: true };

		const url = 'https://' + formData.get('website');
		const properURL = new URL('https://wild-seo-server-87fb94c91999.herokuapp.com/enquire');
		properURL.searchParams.set('url', url);

		if (!isUrlHttp(url)) return { warning: true, message: 'Please enter a valid URL' };

		try {
			const response = await fetch(properURL, {
				method: 'GET'
			});

			if (!response.ok) {
				return { warning: true, message: 'Could not find anything in this URL' };
				// throw new Error(`Response status: ${response.status}`);
			}

			const json = await response.json();

			if (json)
				return {
					url: json.url,
					title: json.title,
					description: json.description,
					image: json.image
				};
		} catch (error) {
			return { warning: true, error };
		}
	}
};
