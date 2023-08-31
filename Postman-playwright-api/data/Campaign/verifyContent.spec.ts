
import { test, expect } from "@playwright/test";
test.describe.configure({ mode: 'serial' });

test.describe('Test Endpoint /campaign/verifyContent?subCampaignId=285&isContentValid=true', () => {
	const auth = process.env.AUTH!
	const expectResult = {};
	const sortedKeyResult = Object.keys(expectResult).sort();

	test('Endpoint Test /campaign/verifyContent?subCampaignId=285&isContentValid=true without auth', async ({ request }) => {
		const Issues = await request.get('/campaign/verifyContent?subCampaignId=285&isContentValid=true');
		expect.soft(Issues.status(401)).toBe();
	});


	test('Endpoint Test /campaign/verifyContent?subCampaignId=285&isContentValid=true', async ({ request }) => {
		const Issues = await request.put('/campaign/verifyContent?subCampaignId=285&isContentValid=true',{headers:{Authorization:`Bearer ${auth}`}} );
		expect(Issues.ok()).toBeTruthy();
		const sortedResult = Object.keys(await Issues.json()).sort();
		expect(Object.keys(sortedResult)).toEqual(sortedKeyResult);
	});
});