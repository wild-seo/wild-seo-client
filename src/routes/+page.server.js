import { fail } from '@sveltejs/kit';

export function load({ setHeaders }) {
	setHeaders({});
}

export const actions = {
	enquire: async ({ request }) => {
		const data = await request.formData();

		const email = data.get('email');
		const website = data.get('website');

		if (!email) {
			return fail(400, { email, missing: true });
		}
	}
};
