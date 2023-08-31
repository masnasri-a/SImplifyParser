
import { test, expect } from "@playwright/test";
test.describe.configure({ mode: 'serial' });

test.describe('Test Endpoint /influencer/campaign/confirmSubCampaign?subCampaignId=771&isConfirmed=true&rejectionReason=', () => {
	const auth = process.env.AUTH!
	const expectResult = {};
	const sortedKeyResult = Object.keys(expectResult).sort();

	test('Endpoint Test /influencer/campaign/confirmSubCampaign?subCampaignId=771&isConfirmed=true&rejectionReason= without auth', async ({ request }) => {
		const Issues = await request.get('/influencer/campaign/confirmSubCampaign?subCampaignId=771&isConfirmed=true&rejectionReason=');
		expect.soft(Issues.status(401)).toBe();
	});


	test('Endpoint Test /influencer/campaign/confirmSubCampaign?subCampaignId=771&isConfirmed=true&rejectionReason=', async ({ request }) => {
		const Issues = await request.put('/influencer/campaign/confirmSubCampaign?subCampaignId=771&isConfirmed=true&rejectionReason=',{headers:{Authorization:`Bearer ${auth}`}} );
		expect(Issues.ok()).toBeTruthy();
		const sortedResult = Object.keys(await Issues.json()).sort();
		expect(Object.keys(sortedResult)).toEqual(sortedKeyResult);
	});
});