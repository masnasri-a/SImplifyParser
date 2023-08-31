
import { test, expect } from "@playwright/test";
test.describe.configure({ mode: 'serial' });

test.describe('Test Endpoint /campaign/setSubCampaignQuantity?subCampaignId=3659&quantity=1', () => {
	const auth = process.env.AUTH!
	const expectResult = {};
	const sortedKeyResult = Object.keys(expectResult).sort();

	test('Endpoint Test /campaign/setSubCampaignQuantity?subCampaignId=3659&quantity=1 without auth', async ({ request }) => {
		const Issues = await request.get('/campaign/setSubCampaignQuantity?subCampaignId=3659&quantity=1');
		expect.soft(Issues.status(401)).toBe();
	});


	test('Endpoint Test /campaign/setSubCampaignQuantity?subCampaignId=3659&quantity=1', async ({ request }) => {
		const Issues = await request.put('/campaign/setSubCampaignQuantity?subCampaignId=3659&quantity=1',{headers:{Authorization:`Bearer ${auth}`}} );
		expect(Issues.ok()).toBeTruthy();
		const sortedResult = Object.keys(await Issues.json()).sort();
		expect(Object.keys(sortedResult)).toEqual(sortedKeyResult);
	});
});