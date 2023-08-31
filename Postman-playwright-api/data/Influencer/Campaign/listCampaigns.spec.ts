
import { test, expect } from "@playwright/test";
test.describe.configure({ mode: 'serial' });

test.describe('Test Endpoint /influencer/campaign/listCampaigns', () => {
	const auth = process.env.AUTH!
	const expectResult = {};
	const sortedKeyResult = Object.keys(expectResult).sort();

	test('Endpoint Test /influencer/campaign/listCampaigns without auth', async ({ request }) => {
		const Issues = await request.get('/influencer/campaign/listCampaigns');
		expect.soft(Issues.status(401)).toBe();
	});


	test('Endpoint Test /influencer/campaign/listCampaigns', async ({ request }) => {
		const Issues = await request.get('/influencer/campaign/listCampaigns',{headers:{Authorization:`Bearer ${auth}`}} );
		expect(Issues.ok()).toBeTruthy();
		const sortedResult = Object.keys(await Issues.json()).sort();
		expect(Object.keys(sortedResult)).toEqual(sortedKeyResult);
	});
});