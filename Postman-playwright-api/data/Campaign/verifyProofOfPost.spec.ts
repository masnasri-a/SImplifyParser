
import { test, expect } from "@playwright/test";
test.describe.configure({ mode: 'serial' });

test.describe('Test Endpoint /campaign/verifyProofOfPost?subCampaignId=435&isProofOfPostValid=true', () => {
	const auth = process.env.AUTH!
	const expectResult = {};
	const sortedKeyResult = Object.keys(expectResult).sort();

	test('Endpoint Test /campaign/verifyProofOfPost?subCampaignId=435&isProofOfPostValid=true without auth', async ({ request }) => {
		const Issues = await request.get('/campaign/verifyProofOfPost?subCampaignId=435&isProofOfPostValid=true');
		expect.soft(Issues.status(401)).toBe();
	});


	test('Endpoint Test /campaign/verifyProofOfPost?subCampaignId=435&isProofOfPostValid=true', async ({ request }) => {
		const Issues = await request.put('/campaign/verifyProofOfPost?subCampaignId=435&isProofOfPostValid=true',{headers:{Authorization:`Bearer ${auth}`}} );
		expect(Issues.ok()).toBeTruthy();
		const sortedResult = Object.keys(await Issues.json()).sort();
		expect(Object.keys(sortedResult)).toEqual(sortedKeyResult);
	});
});