import { fail } from '@sveltejs/kit';
export function load({}) {}

export const actions = {
	contact: async ({ cookies, request }) => {
		const data = await request.formData();

		let name = data.get('name');
		let email = data.get('email');
		let organization = data.get('organization');
		let website = data.get('website');
		let country = data.get('country');

		let keywordService = data.get('keyword');
		let siteAuditService = data.get('site-audit');
		let competitorService = data.get('competitor-analysis');
		let servicesEnlisted = [];

		let websiteVision = data.get('websiteVision');

		if (keywordService) servicesEnlisted.push(keywordService);
		if (siteAuditService) servicesEnlisted.push(siteAuditService);
		if (competitorService) servicesEnlisted.push(competitorService);

		let enquiryData = {
			name,
			email,
			organization,
			website,
			country,
			servicesEnlisted,
			websiteVision
		};

		const apiURL = new URL('https://wild-seo-server-87fb94c91999.herokuapp.com/contact');

		await fetch(apiURL, {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(enquiryData)
		})
			.then((res) => res.json())
			.then((data) => console.log(data));

		// try {
		// 	data.get('email');
		// 	return { message: 'success' };
		// } catch (error) {
		// 	// @ts-ignore
		// 	return fail(422, { description: data.get('email'), error: error.message });
		// }
	}
};
