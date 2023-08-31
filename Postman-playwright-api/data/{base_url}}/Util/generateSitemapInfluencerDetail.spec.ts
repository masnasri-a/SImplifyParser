
import { test, expect } from "@playwright/test";
test.describe.configure({ mode: 'serial' });

test.describe('Test Endpoint /util/generateSitemapInfluencerDetail', () => {
	const expectResult = {};
	const sortedKeyResult = Object.keys(expectResult).sort();
	const requestBody = {'payload': {'detail': {'slugCategory': 'journalist', 'index': 1, 'categoryId': 27}, 'source': 'idn.ice.web'}}

	test('Endpoint Test /util/generateSitemapInfluencerDetail', async ({ request }) => {
		const Issues = await request.post('/util/generateSitemapInfluencerDetail',{data: requestBody,headers:{Authorization:`Bearer ${auth}`}} );
		expect(Issues.ok()).toBeTruthy();
		const sortedResult = Object.keys(await Issues.json()).sort();
		expect(Object.keys(sortedResult)).toEqual(sortedKeyResult);
	});
});