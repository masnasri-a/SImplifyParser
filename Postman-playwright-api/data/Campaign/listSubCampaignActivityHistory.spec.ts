
import { test, expect } from "@playwright/test";
test.describe.configure({ mode: 'serial' });

test.describe('Test Endpoint /campaign/listSubCampaignActivityHistory?subCampaignId=12', () => {
	const auth = process.env.AUTH!
	const expectResult = {};
	const sortedKeyResult = Object.keys(expectResult).sort();

	test('Endpoint Test /campaign/listSubCampaignActivityHistory?subCampaignId=12 without auth', async ({ request }) => {
		const Issues = await request.get('/campaign/listSubCampaignActivityHistory?subCampaignId=12');
		expect.soft(Issues.status(401)).toBe();
	});


	test('Endpoint Test /campaign/listSubCampaignActivityHistory?subCampaignId=12', async ({ request }) => {
		const Issues = await request.get('/campaign/listSubCampaignActivityHistory?subCampaignId=12',{headers:{Authorization:`Bearer ${auth}`}} );
		expect(Issues.ok()).toBeTruthy();
		const sortedResult = Object.keys(await Issues.json()).sort();
		expect(Object.keys(sortedResult)).toEqual(sortedKeyResult);
	});
});