
import { test, expect } from "@playwright/test";
test.describe.configure({ mode: 'serial' });

test.describe('Test Endpoint /campaign/updateCampaign', () => {
	const auth = process.env.AUTH!
	const expectResult = {};
	const sortedKeyResult = Object.keys(expectResult).sort();
	const requestBody = {'campaignId': 277, 'title': 'This is the title of the campaign Postman 2 - updated', 'productName': 'Name of the product - updated', 'categoryIds': [2], 'description': 'This is the description of this campaign. - updated', 'objective': 'This is the objective of this campaign. - updated', 'referenceLink': 'https://example.com/refLink', 'startTimeInMillis': 763192836821, 'endTimeInMillis': 63129836213}

	test('Endpoint Test /campaign/updateCampaign without auth', async ({ request }) => {
		const Issues = await request.get('/campaign/updateCampaign');
		expect.soft(Issues.status(401)).toBe();
	});


	test('Endpoint Test /campaign/updateCampaign', async ({ request }) => {
		const Issues = await request.put('/campaign/updateCampaign',{data: requestBody,headers:{Authorization:`Bearer ${auth}`}} );
		expect(Issues.ok()).toBeTruthy();
		const sortedResult = Object.keys(await Issues.json()).sort();
		expect(Object.keys(sortedResult)).toEqual(sortedKeyResult);
	});
});