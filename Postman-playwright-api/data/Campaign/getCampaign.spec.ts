
import { test, expect } from "@playwright/test";
test.describe.configure({ mode: 'serial' });

test.describe('Test Endpoint /campaign/getCampaign?campaignId=312', () => {
	const auth = process.env.AUTH!
	const expectResult = {};
	const sortedKeyResult = Object.keys(expectResult).sort();

	test('Endpoint Test /campaign/getCampaign?campaignId=312 without auth', async ({ request }) => {
		const Issues = await request.get('/campaign/getCampaign?campaignId=312');
		expect.soft(Issues.status(401)).toBe();
	});


	test('Endpoint Test /campaign/getCampaign?campaignId=312', async ({ request }) => {
		const Issues = await request.get('/campaign/getCampaign?campaignId=312',{headers:{Authorization:`Bearer ${auth}`}} );
		expect(Issues.ok()).toBeTruthy();
		const sortedResult = Object.keys(await Issues.json()).sort();
		expect(Object.keys(sortedResult)).toEqual(sortedKeyResult);
	});
});