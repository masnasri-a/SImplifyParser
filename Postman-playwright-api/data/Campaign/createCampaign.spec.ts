
import { test, expect } from "@playwright/test";
test.describe.configure({ mode: 'serial' });

test.describe('Test Endpoint /campaign/createCampaign', () => {
	const auth = process.env.AUTH!
	const expectResult = {};
	const sortedKeyResult = Object.keys(expectResult).sort();
	const requestBody = {'title': 'Campaign Test Postman 2', 'productName': 'Name of the product Test Postman 2', 'categoryIds': [2], 'campaignImageLinkKey': 'CAMPAIGN/1675837778089-Olla-JKT48.jpg', 'productFileLinkKeys': ['CAMPAIGN/1675837778089-Olla-JKT48.jpg'], 'description': 'This is the description of this campaign. Test Postman 2', 'objective': 'This is the objective of this campaign. Test Postman 2', 'referenceLink': 'https://example.com/refLink', 'startTimeInMillis': 1678516168000, 'endTimeInMillis': 1678516168000}

	test('Endpoint Test /campaign/createCampaign without auth', async ({ request }) => {
		const Issues = await request.get('/campaign/createCampaign');
		expect.soft(Issues.status(401)).toBe();
	});


	test('Endpoint Test /campaign/createCampaign', async ({ request }) => {
		const Issues = await request.post('/campaign/createCampaign',{data: requestBody,headers:{Authorization:`Bearer ${auth}`}} );
		expect(Issues.ok()).toBeTruthy();
		const sortedResult = Object.keys(await Issues.json()).sort();
		expect(Object.keys(sortedResult)).toEqual(sortedKeyResult);
	});
});