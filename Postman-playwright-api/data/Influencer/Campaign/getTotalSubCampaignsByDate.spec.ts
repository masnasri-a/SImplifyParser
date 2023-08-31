
import { test, expect } from "@playwright/test";
test.describe.configure({ mode: 'serial' });

test.describe('Test Endpoint /influencer/campaign/getTotalSubCampaignsByDate?createdTimeFromInMillis=1677603600000&createdTimeToInMillis=1678035600000', () => {
	const auth = process.env.AUTH!
	const expectResult = {};
	const sortedKeyResult = Object.keys(expectResult).sort();

	test('Endpoint Test /influencer/campaign/getTotalSubCampaignsByDate?createdTimeFromInMillis=1677603600000&createdTimeToInMillis=1678035600000 without auth', async ({ request }) => {
		const Issues = await request.get('/influencer/campaign/getTotalSubCampaignsByDate?createdTimeFromInMillis=1677603600000&createdTimeToInMillis=1678035600000');
		expect.soft(Issues.status(401)).toBe();
	});


	test('Endpoint Test /influencer/campaign/getTotalSubCampaignsByDate?createdTimeFromInMillis=1677603600000&createdTimeToInMillis=1678035600000', async ({ request }) => {
		const Issues = await request.get('/influencer/campaign/getTotalSubCampaignsByDate?createdTimeFromInMillis=1677603600000&createdTimeToInMillis=1678035600000',{headers:{Authorization:`Bearer ${auth}`}} );
		expect(Issues.ok()).toBeTruthy();
		const sortedResult = Object.keys(await Issues.json()).sort();
		expect(Object.keys(sortedResult)).toEqual(sortedKeyResult);
	});
});