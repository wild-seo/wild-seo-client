import { loadStripe } from '@stripe/stripe-js';
import { env } from '$env/dynamic/private';
import * as EmailValidator from 'email-validator';

const stripe = await loadStripe(env.STRIPE_PUBLISHABLE_KEY);

export function load() {}

export const actions = {
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
