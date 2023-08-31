
import { test, expect } from "@playwright/test";
test.describe.configure({ mode: 'serial' });

test.describe('Test Endpoint /businessUser/influencer/getInfluencer?influencerId=', () => {
	const auth = process.env.AUTH!
	const expectResult = {};
	const sortedKeyResult = Object.keys(expectResult).sort();

	test('Endpoint Test /businessUser/influencer/getInfluencer?influencerId= without auth', async ({ request }) => {
		const Issues = await request.get('/businessUser/influencer/getInfluencer?influencerId=');
		expect.soft(Issues.status(401)).toBe();
	});


	test('Endpoint Test /businessUser/influencer/getInfluencer?influencerId=', async ({ request }) => {
		const Issues = await request.get('/businessUser/influencer/getInfluencer?influencerId=',{headers:{Authorization:`Bearer ${auth}`}} );
		expect(Issues.ok()).toBeTruthy();
		const sortedResult = Object.keys(await Issues.json()).sort();
		expect(Object.keys(sortedResult)).toEqual(sortedKeyResult);
	});
});