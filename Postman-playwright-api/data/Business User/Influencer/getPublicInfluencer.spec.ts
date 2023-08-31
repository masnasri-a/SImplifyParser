
import { test, expect } from "@playwright/test";
test.describe.configure({ mode: 'serial' });

test.describe('Test Endpoint /businessUser/influencer/getPublicInfluencer?influencerId=65', () => {
	const expectResult = {};
	const sortedKeyResult = Object.keys(expectResult).sort();

	test('Endpoint Test /businessUser/influencer/getPublicInfluencer?influencerId=65', async ({ request }) => {
		const Issues = await request.get('/businessUser/influencer/getPublicInfluencer?influencerId=65' );
		expect(Issues.ok()).toBeTruthy();
		const sortedResult = Object.keys(await Issues.json()).sort();
		expect(Object.keys(sortedResult)).toEqual(sortedKeyResult);
	});
});