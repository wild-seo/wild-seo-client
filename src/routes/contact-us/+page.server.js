import { fail } from '@sveltejs/kit';
export function load({}) {}

export const actions = {
	contact: async ({ cookies, request }) => {
		const data = await request.formData();

		let email = data.get('email');
		let organization = data.get('organization');
		let website = data.get('website');

		let enquiryData = { email, organization, website };
		console.log(enquiryData);
		try {
			data.get('email');
			return { message: 'success' };
		} catch (error) {
			// @ts-ignore
			return fail(422, { description: data.get('email'), error: error.message });
		}
	}
};
