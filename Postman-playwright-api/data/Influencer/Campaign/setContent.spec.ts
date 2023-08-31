
import { test, expect } from "@playwright/test";
test.describe.configure({ mode: 'serial' });

test.describe('Test Endpoint /influencer/campaign/setContent?subCampaignId=771', () => {
	const auth = process.env.AUTH!
	const expectResult = {};
	const sortedKeyResult = Object.keys(expectResult).sort();
	const requestBody = ['e616955f63ba184df29f2855544d178e-lj43q22k.png', 'e616955f63ba184df29f2855544d178e-lj43q22k.png']

	test('Endpoint Test /influencer/campaign/setContent?subCampaignId=771 without auth', async ({ request }) => {
		const Issues = await request.get('/influencer/campaign/setContent?subCampaignId=771');
		expect.soft(Issues.status(401)).toBe();
	});


	test('Endpoint Test /influencer/campaign/setContent?subCampaignId=771', async ({ request }) => {
		const Issues = await request.post('/influencer/campaign/setContent?subCampaignId=771',{data: requestBody,headers:{Authorization:`Bearer ${auth}`}} );
		expect(Issues.ok()).toBeTruthy();
		const sortedResult = Object.keys(await Issues.json()).sort();
		expect(Object.keys(sortedResult)).toEqual(sortedKeyResult);
	});
});