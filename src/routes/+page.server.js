import { fail } from '@sveltejs/kit';
import isUrlHttp from 'is-url-http';
import * as EmailValidator from 'email-validator';

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
				return { warning: true, message: 'Oops! URL has their SEO settings to private' };
				// throw new Error(`Response status: ${response.status}`);
			}

			const json = await response.json();

			if (json)
				return {
					url: json.url,
					title: json.title,
					description: json.description,
					image: json.image,
					domainAge: json.domainAge,
					registarName: json.registarName,
					registrantCountry: json.registrantCountry,
					registrantRegion: json.registrantRegion
				};
		} catch (error) {
			return { warning: true, error };
		}
	},
	contact: async ({ request }) => {
		const formData = await request.formData();

		if (!formData.get('message'))
			return { miniWarning: true, miniMessage: "Please don't leave the message empty" };
		if (!formData.get('email')) return { miniWarning: true, miniMessage: 'Please enter an email' };

		let message = formData.get('message');
		let returnEmail = formData.get('email');

		if (!EmailValidator.validate(`${returnEmail}`))
			return { miniWarning: true, miniMessage: 'Please enter a valid email address' };

		const mailApiURL = new URL('https://wild-seo-server-87fb94c91999.herokuapp.com/contact/short');

		let miniMailData = {
			message,
			returnEmail
		};

		await fetch(mailApiURL, {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(miniMailData)
		})
			.then((res) => {
				res.json();
			})
			.then((data) => console.log(data));

		return {
			success: true,
			miniMessage: "We've got your message !"
		};
	}
};
