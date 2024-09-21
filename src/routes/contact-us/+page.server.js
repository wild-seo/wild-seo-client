import { fail } from '@sveltejs/kit';
export function load({}) {}

export const actions = {
	contact: async ({ cookies, request }) => {
		const data = await request.formData();

		await new Promise((fulfil) => setTimeout(fulfil, 1000));

		try {
			data.get('email');
			return { message: 'success' };
		} catch (error) {
			// @ts-ignore
			return fail(422, { description: data.get('email'), error: error.message });
		}
	}
};
