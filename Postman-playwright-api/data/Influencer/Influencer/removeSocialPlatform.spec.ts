
import { test, expect } from "@playwright/test";
test.describe.configure({ mode: 'serial' });

test.describe('Test Endpoint /influencer/influencer/removeSocialPlatform?socialPlatformId=127', () => {
	const auth = process.env.AUTH!
	const expectResult = {};
	const sortedKeyResult = Object.keys(expectResult).sort();

	test('Endpoint Test /influencer/influencer/removeSocialPlatform?socialPlatformId=127 without auth', async ({ request }) => {
		const Issues = await request.get('/influencer/influencer/removeSocialPlatform?socialPlatformId=127');
		expect.soft(Issues.status(401)).toBe();
	});


	test('Endpoint Test /influencer/influencer/removeSocialPlatform?socialPlatformId=127', async ({ request }) => {
		const Issues = await request.delete('/influencer/influencer/removeSocialPlatform?socialPlatformId=127',{headers:{Authorization:`Bearer ${auth}`}} );
		expect(Issues.ok()).toBeTruthy();
		const sortedResult = Object.keys(await Issues.json()).sort();
		expect(Object.keys(sortedResult)).toEqual(sortedKeyResult);
	});
});