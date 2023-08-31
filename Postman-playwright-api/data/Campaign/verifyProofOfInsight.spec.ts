
import { test, expect } from "@playwright/test";
test.describe.configure({ mode: 'serial' });

test.describe('Test Endpoint /campaign/verifyProofOfInsight?subCampaignId=285&isProofOfInsightValid=true', () => {
	const auth = process.env.AUTH!
	const expectResult = {};
	const sortedKeyResult = Object.keys(expectResult).sort();

	test('Endpoint Test /campaign/verifyProofOfInsight?subCampaignId=285&isProofOfInsightValid=true without auth', async ({ request }) => {
		const Issues = await request.get('/campaign/verifyProofOfInsight?subCampaignId=285&isProofOfInsightValid=true');
		expect.soft(Issues.status(401)).toBe();
	});


	test('Endpoint Test /campaign/verifyProofOfInsight?subCampaignId=285&isProofOfInsightValid=true', async ({ request }) => {
		const Issues = await request.put('/campaign/verifyProofOfInsight?subCampaignId=285&isProofOfInsightValid=true',{headers:{Authorization:`Bearer ${auth}`}} );
		expect(Issues.ok()).toBeTruthy();
		const sortedResult = Object.keys(await Issues.json()).sort();
		expect(Object.keys(sortedResult)).toEqual(sortedKeyResult);
	});
});