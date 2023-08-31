
import { test, expect } from "@playwright/test";
test.describe.configure({ mode: 'serial' });

test.describe('Test Endpoint /campaign/addSubCampaign', () => {
	const auth = process.env.AUTH!
	const expectResult = {};
	const sortedKeyResult = Object.keys(expectResult).sort();
	const requestBody = {'campaignId': 277, 'serviceId': 18, 'isSubServiceSelected': False, 'subServiceId': None, 'quantity': 1}

	test('Endpoint Test /campaign/addSubCampaign without auth', async ({ request }) => {
		const Issues = await request.get('/campaign/addSubCampaign');
		expect.soft(Issues.status(401)).toBe();
	});


	test('Endpoint Test /campaign/addSubCampaign', async ({ request }) => {
		const Issues = await request.post('/campaign/addSubCampaign',{data: requestBody,headers:{Authorization:`Bearer ${auth}`}} );
		expect(Issues.ok()).toBeTruthy();
		const sortedResult = Object.keys(await Issues.json()).sort();
		expect(Object.keys(sortedResult)).toEqual(sortedKeyResult);
	});
});